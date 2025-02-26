import fs from 'fs';
import path from 'path';
import { createConfig } from './config/createConfig';
import createClient from './createClient';
import { globalI18n } from './appWithTranslation';
const DEFAULT_CONFIG_PATH = './next-i18next.config.js';

const flatLocales = locales => {
  if (typeof locales === 'string') {
    return [locales];
  }

  if (Array.isArray(locales)) {
    return locales;
  }

  if (typeof locales === 'object' && locales !== null) {
    return Object.values(locales).reduce((all, items) => [...all, ...items], []);
  }

  return [];
};

const flatNamespaces = namespacesByLocale => {
  const allNamespaces = [];

  for (const localNamespaces of namespacesByLocale) {
    allNamespaces.push(...localNamespaces);
  }

  return Array.from(new Set(allNamespaces));
};

export const serverSideTranslations = async (initialLocale, namespacesRequired = undefined, configOverride = null, extraLocales = false) => {
  if (typeof initialLocale !== 'string') {
    throw new Error('Initial locale argument was not passed into serverSideTranslations');
  }

  let userConfig = configOverride;

  if (!userConfig && fs.existsSync(path.resolve(DEFAULT_CONFIG_PATH))) {
    userConfig = await import(path.resolve(DEFAULT_CONFIG_PATH));
  }

  if (userConfig === null) {
    throw new Error('next-i18next was unable to find a user config');
  }

  const config = createConfig({ ...userConfig,
    lng: initialLocale
  });
  const {
    localeExtension,
    localePath,
    fallbackLng,
    reloadOnPrerender
  } = config;

  if (reloadOnPrerender) {
    await globalI18n?.reloadResources();
  }

  const {
    i18n,
    initPromise
  } = createClient({ ...config,
    lng: initialLocale
  });
  await initPromise;
  const initialI18nStore = {
    [initialLocale]: {}
  };
  flatLocales(fallbackLng).concat(flatLocales(extraLocales)).forEach(lng => {
    initialI18nStore[lng] = {};
  });

  if (!Array.isArray(namespacesRequired)) {
    if (typeof localePath === 'function') {
      throw new Error('Must provide namespacesRequired to serverSideTranslations when using a function as localePath');
    }

    const getLocaleNamespaces = path => fs.readdirSync(path).map(file => file.replace(`.${localeExtension}`, ''));

    const namespacesByLocale = Object.keys(initialI18nStore).map(locale => getLocaleNamespaces(path.resolve(process.cwd(), `${localePath}/${locale}`)));
    namespacesRequired = flatNamespaces(namespacesByLocale);
  }

  if (config.sharedModule.enabled) {
    const {
      translateServerUrl
    } = config.sharedModule;
    await Promise.all(namespacesRequired.filter(ns => ns.startsWith('shared-')).map(async ns => {
      for (const locale in initialI18nStore) {
        if (i18n.services.resourceStore.data[locale][ns] !== undefined) return;
        const resource = await (await fetch(`${translateServerUrl}/shared-locales/${locale}/${ns}.json`)).json();
        i18n.services.resourceStore.data[locale][ns] = resource;
      }
    }));
  }

  namespacesRequired.forEach(ns => {
    for (const locale in initialI18nStore) {
      initialI18nStore[locale][ns] = (i18n.services.resourceStore.data[locale] || {})[ns] || {};
    }
  });
  return {
    _nextI18Next: {
      initialI18nStore,
      initialLocale,
      ns: namespacesRequired,
      userConfig: config.serializeConfig ? userConfig : null
    }
  };
};
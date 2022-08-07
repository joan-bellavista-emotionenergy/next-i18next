import createClientBrowser from './browser';
const config = {
  defaultLocale: 'en',
  locales: ['en', 'de'],
  use: []
};
describe('createClientBrowser', () => {
  it('returns a browser client', () => {
    const client = createClientBrowser(config);
    expect(typeof client.initPromise.then).toBe('function');
    expect(typeof client.i18n.addResource).toBe('function');
    expect(typeof client.i18n.translator).toBe('object');
    expect(client.i18n.options.defaultLocale).toEqual(config.defaultLocale);
    expect(client.i18n.options.locales).toEqual(config.locales);
  });
});
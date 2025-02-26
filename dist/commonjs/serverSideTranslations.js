"use strict";

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverSideTranslations = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.object.values.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.set.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.string.starts-with.js");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _createConfig = require("./config/createConfig");

var _createClient2 = _interopRequireDefault(require("./createClient"));

var _appWithTranslation = require("./appWithTranslation");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DEFAULT_CONFIG_PATH = './next-i18next.config.js';

var flatLocales = function flatLocales(locales) {
  if (typeof locales === 'string') {
    return [locales];
  }

  if (Array.isArray(locales)) {
    return locales;
  }

  if ((0, _typeof2["default"])(locales) === 'object' && locales !== null) {
    return Object.values(locales).reduce(function (all, items) {
      return [].concat((0, _toConsumableArray2["default"])(all), (0, _toConsumableArray2["default"])(items));
    }, []);
  }

  return [];
};

var flatNamespaces = function flatNamespaces(namespacesByLocale) {
  var allNamespaces = [];

  var _iterator = _createForOfIteratorHelper(namespacesByLocale),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var localNamespaces = _step.value;
      allNamespaces.push.apply(allNamespaces, (0, _toConsumableArray2["default"])(localNamespaces));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return Array.from(new Set(allNamespaces));
};

var serverSideTranslations = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(initialLocale) {
    var namespacesRequired,
        configOverride,
        extraLocales,
        userConfig,
        config,
        localeExtension,
        localePath,
        fallbackLng,
        reloadOnPrerender,
        _createClient,
        i18n,
        initPromise,
        initialI18nStore,
        getLocaleNamespaces,
        namespacesByLocale,
        translateServerUrl,
        _args2 = arguments;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            namespacesRequired = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : undefined;
            configOverride = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : null;
            extraLocales = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : false;

            if (!(typeof initialLocale !== 'string')) {
              _context2.next = 5;
              break;
            }

            throw new Error('Initial locale argument was not passed into serverSideTranslations');

          case 5:
            userConfig = configOverride;

            if (!(!userConfig && _fs["default"].existsSync(_path["default"].resolve(DEFAULT_CONFIG_PATH)))) {
              _context2.next = 10;
              break;
            }

            _context2.next = 9;
            return Promise.resolve("".concat(_path["default"].resolve(DEFAULT_CONFIG_PATH))).then(function (s) {
              return _interopRequireWildcard(require(s));
            });

          case 9:
            userConfig = _context2.sent;

          case 10:
            if (!(userConfig === null)) {
              _context2.next = 12;
              break;
            }

            throw new Error('next-i18next was unable to find a user config');

          case 12:
            config = (0, _createConfig.createConfig)(_objectSpread(_objectSpread({}, userConfig), {}, {
              lng: initialLocale
            }));
            localeExtension = config.localeExtension, localePath = config.localePath, fallbackLng = config.fallbackLng, reloadOnPrerender = config.reloadOnPrerender;

            if (!reloadOnPrerender) {
              _context2.next = 17;
              break;
            }

            _context2.next = 17;
            return _appWithTranslation.globalI18n === null || _appWithTranslation.globalI18n === void 0 ? void 0 : _appWithTranslation.globalI18n.reloadResources();

          case 17:
            _createClient = (0, _createClient2["default"])(_objectSpread(_objectSpread({}, config), {}, {
              lng: initialLocale
            })), i18n = _createClient.i18n, initPromise = _createClient.initPromise;
            _context2.next = 20;
            return initPromise;

          case 20:
            initialI18nStore = (0, _defineProperty2["default"])({}, initialLocale, {});
            flatLocales(fallbackLng).concat(flatLocales(extraLocales)).forEach(function (lng) {
              initialI18nStore[lng] = {};
            });

            if (Array.isArray(namespacesRequired)) {
              _context2.next = 28;
              break;
            }

            if (!(typeof localePath === 'function')) {
              _context2.next = 25;
              break;
            }

            throw new Error('Must provide namespacesRequired to serverSideTranslations when using a function as localePath');

          case 25:
            getLocaleNamespaces = function getLocaleNamespaces(path) {
              return _fs["default"].readdirSync(path).map(function (file) {
                return file.replace(".".concat(localeExtension), '');
              });
            };

            namespacesByLocale = Object.keys(initialI18nStore).map(function (locale) {
              return getLocaleNamespaces(_path["default"].resolve(process.cwd(), "".concat(localePath, "/").concat(locale)));
            });
            namespacesRequired = flatNamespaces(namespacesByLocale);

          case 28:
            if (!config.sharedModule.enabled) {
              _context2.next = 32;
              break;
            }

            translateServerUrl = config.sharedModule.translateServerUrl;
            _context2.next = 32;
            return Promise.all(namespacesRequired.filter(function (ns) {
              return ns.startsWith('shared-');
            }).map( /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ns) {
                var locale, resource;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.t0 = _regenerator["default"].keys(initialI18nStore);

                      case 1:
                        if ((_context.t1 = _context.t0()).done) {
                          _context.next = 13;
                          break;
                        }

                        locale = _context.t1.value;

                        if (!(i18n.services.resourceStore.data[locale][ns] !== undefined)) {
                          _context.next = 5;
                          break;
                        }

                        return _context.abrupt("return");

                      case 5:
                        _context.next = 7;
                        return fetch("".concat(translateServerUrl, "/shared-locales/").concat(locale, "/").concat(ns, ".json"));

                      case 7:
                        _context.next = 9;
                        return _context.sent.json();

                      case 9:
                        resource = _context.sent;
                        i18n.services.resourceStore.data[locale][ns] = resource;
                        _context.next = 1;
                        break;

                      case 13:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 32:
            namespacesRequired.forEach(function (ns) {
              for (var locale in initialI18nStore) {
                initialI18nStore[locale][ns] = (i18n.services.resourceStore.data[locale] || {})[ns] || {};
              }
            });
            return _context2.abrupt("return", {
              _nextI18Next: {
                initialI18nStore: initialI18nStore,
                initialLocale: initialLocale,
                ns: namespacesRequired,
                userConfig: config.serializeConfig ? userConfig : null
              }
            });

          case 34:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function serverSideTranslations(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.serverSideTranslations = serverSideTranslations;
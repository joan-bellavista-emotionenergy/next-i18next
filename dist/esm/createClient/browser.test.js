import _typeof from "@babel/runtime/helpers/typeof";
import createClientBrowser from './browser';
var config = {
  defaultLocale: 'en',
  locales: ['en', 'de'],
  use: []
};
describe('createClientBrowser', function () {
  it('returns a browser client', function () {
    var client = createClientBrowser(config);
    expect(_typeof(client.initPromise.then)).toBe('function');
    expect(_typeof(client.i18n.addResource)).toBe('function');
    expect(_typeof(client.i18n.translator)).toBe('object');
    expect(client.i18n.options.defaultLocale).toEqual(config.defaultLocale);
    expect(client.i18n.options.locales).toEqual(config.locales);
  });
});
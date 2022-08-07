import createClientNode from './node';
const config = {
  defaultLocale: 'en',
  locales: ['en', 'de'],
  use: []
};
describe('createClientNode', () => {
  const client = createClientNode(config);
  it('returns a node client', () => {
    expect(typeof client.initPromise.then).toBe('function');
    expect(typeof client.i18n.addResource).toBe('function');
    expect(typeof client.i18n.translator).toBe('object');
    expect(client.i18n.options.defaultLocale).toEqual(config.defaultLocale);
    expect(client.i18n.options.locales).toEqual(config.locales);
    expect(client.i18n.options.isClone).not.toBe(true);
  });
  describe('createClientNode a second time should return a clone of i18next', () => {
    it('returns a node client', () => {
      const secondClient = createClientNode(config);
      expect(typeof secondClient.initPromise.then).toBe('function');
      expect(typeof secondClient.i18n.addResource).toBe('function');
      expect(typeof secondClient.i18n.translator).toBe('object');
      expect(secondClient.i18n.options.defaultLocale).toEqual(config.defaultLocale);
      expect(secondClient.i18n.options.locales).toEqual(config.locales);
      expect(secondClient.i18n.options.isClone).toBe(true);
      expect(secondClient).not.toEqual(client);
      expect(secondClient.store).toEqual(client.store);
    });
  });
});
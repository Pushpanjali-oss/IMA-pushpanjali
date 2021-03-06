export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: 'ZEJGTRYJnMz4WfNb-6WQf',
    client_secret:
      'snWxwUFJrgSoNKzDjKY-yKWiOCee_75LgEhm064Vdy594J9irB0O8BYXrzwuVyk87wd8WeahnB5u37XfkE0-6A',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};

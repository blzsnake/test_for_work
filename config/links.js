const LINKS = {
  development: {
    main: 'https://dev.ghofi.net',
    profile: 'https://dev-my.ghofi.net',
    legal: 'https://dev.ghofi.net/legal-information',
    cookies: 'https://dev.ghofi.net/cookie',
    enter: 'https://dev-l.ghofi.net/enter',
    support: 'https://dev-my.ghofi.net/support',
    payments: 'https://dev-payments.ghofi.net/checkout',
  },
  dev: {
    main: 'https://dev.ghofi.net',
    profile: 'https://dev-my.ghofi.net',
    legal: 'https://dev.ghofi.net/legal-information',
    cookies: 'https://dev.ghofi.net/cookie',
    enter: 'https://dev-l.ghofi.net/enter',
    support: 'https://dev-my.ghofi.net/support',
    payments: 'https://dev-payments.ghofi.net/checkout',
  },
  stage: {
    main: 'https://stage.ghofi.net',
    profile: 'https://stage-my.ghofi.net',
    legal: 'https://stage.ghofi.net/legal-information',
    cookies: 'https://stage.ghofi.net/cookie',
    enter: 'https://stage-l.ghofi.net/enter',
    support: 'https://stage-my.ghofi.net/support',
    payments: 'http://stage-payments.ghofi.net/checkout',
  },
  production: {
    main: 'https://ghofi.com',
    profile: 'https://my.ghofi.com',
    legal: 'https://ghofi.com/legal-information',
    cookies: 'https://ghofi.com/cookie',
    enter: 'https://l.ghofi.com/enter',
    support: 'https://my.ghofi.com/support',
    // Временно поставил адрес dev - для тестов
    payments: 'https://dev-payments.ghofi.com/checkout',
    // payments: 'http://payments.ghofi.com'
    // https://dev-payments.ghofi.com/checkout
  },
};

export default (env = 'development') => LINKS[env];


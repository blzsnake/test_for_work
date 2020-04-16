exports.config = {
  tests: './tests/*_test.js',
  output: './tests/output',
  timeout: 10000,
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: false,
      waitForNavigation: 'networkidle0',
      coloredLogs: true,
      waitForTimeout: 10000,
      windowSize: '1366x768',
    },
    BaseHelper: {
      require: './tests/helpers/baseHelper',
    },
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'ghofi-profile',
};

module.exports = {
  coverageReporters: ['text'],
  setupTestFrameworkScriptFile: '<rootDir>/jest.init.js',
  collectCoverageFrom: [
    'src/**/*.js(x)',
  ],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest.transform.js',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
};

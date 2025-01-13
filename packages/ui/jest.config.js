module.exports = {
  globals: {
    __DEV__: true
  },
  setupFilesAfterEnv: ['<rootDir>/test/jest/jest.setup.js'],
  // noStackTrace: true,
  // bail: true,
  // cache: false,
  // verbose: true,
  // watch: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/test/jest/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/utils/Timestamp.js'
    // add other paths here if you want them
  ],
  // collectCoverageFrom: [
  //   '<rootDir>/src/**/*.js'
  //   // add other paths here if you want them
  // ],
  coverageReporters: [ 'json-summary', 'text', 'lcov' ],
  coverageThreshold: {
    global: {
      //  branches: 50,
      //  functions: 50,
      //  lines: 50,
      //  statements: 50
    }
  },
  testMatch: [
    '<rootDir>/test/jest/__tests__/**/*.spec.js',
    '<rootDir>/test/jest/__tests__/**/*.test.js'
  ],
  moduleFileExtensions: [ 'js', 'json' ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': '<rootDir>/../node_modules/vue/dist/vue.cjs.js', // this is uncool
    '^quasar$': '<rootDir>/../node_modules/quasar/dist/quasar.cjs.prod.js', // this is uncool
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^test/(.*)$': '<rootDir>/test/$1',
    'package.json': '<rootDir>/package.json'
  },
  transform: {
    '.*\\.js$': 'babel-jest',
    '.*\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  }
}

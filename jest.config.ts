/**
 * @file Jest Unit Test Configuration File
 */
module.exports = {
  testRegex: '.*.spec.(js|ts|tsx)?$',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'node',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: 'coverage/unit-test-report.html',
        includeFailureMsg: true,
      },
    ],
  ],
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.ts'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules', './src/index.ts'],
  coverageReporters: ['json', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
};

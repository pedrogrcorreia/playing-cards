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
      'jest-junit',
      {
        outputDirectory: 'coverage',
        outputName: 'jest_report.xml',
      },
    ],
  ],
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.ts'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules', './src/index.ts'],
  coverageReporters: ['json', 'json-summary', 'lcov', ['text', { file: 'coverage.txt' }], 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
};

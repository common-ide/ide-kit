module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  moduleNameMapper: {
    'ide-(.*)': '<rootDir>/packages/ide-$1/src'
  },
  // verbose: true,
  collectCoverage: false,
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: ['<rootDir>/packages/*/src/**'],
  testMatch: ['<rootDir>/packages/*/**/*.(test|base).(js|ts)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/dist/'],
  transformIgnorePatterns: [], // 不能忽略
  globals: {
    window: {},
    __VERSION__: '',
  },
};

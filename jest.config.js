module.exports = {
  testEnvironment: 'jest-environment-jsdom-fifteen',
  transform: {
    'jestScript.js|utils.js': '<rootDir>/node_modules/babel-jest',
    '.(ts|tsx)': '<rootDir>/bin/jest.preprocessor.js',
  },
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['src/**/index.{ts,tsx}'],
  testRegex: '(src/.*.unit.(ts|tsx)$)',
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js'],
  setupFilesAfterEnv: ['./bin/jestScript'],
}

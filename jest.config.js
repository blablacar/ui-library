module.exports = {
  transform: {
    'jestScript.js|utils.js': '<rootDir>/node_modules/babel-jest',
    '.(ts|tsx)': '<rootDir>/bin/jest.preprocessor.js',
    'jestScript.js|utils.js': '<rootDir>/node_modules/babel-jest',
  },
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['src/**/index.{ts,tsx,js,jsx}'],
  testRegex: '(src/.*.unit.(js|ts|jsx|tsx)$)',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  setupFilesAfterEnv: ['./bin/jestScript'],
}

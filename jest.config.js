module.exports = {
  transform: {
    '.(ts|tsx)': '<rootDir>/bin/jest.preprocessor.js',
    'jestScript.js|utils.js': '<rootDir>/node_modules/babel-jest',
  },
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['src/**/index.{ts, js}'],
  testRegex: '(src/.*.unit.(js|jsx|tsx)$)',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  setupTestFrameworkScriptFile: './bin/jestScript',
}

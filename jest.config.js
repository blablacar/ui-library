module.exports = {
  transform: {
    'jestScript.js|utils.js': '<rootDir>/node_modules/babel-jest',
    '.(ts|tsx)': '<rootDir>/bin/jest.preprocessor.js',
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
  },
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['src/**/index.{ts,tsx}'],
  testRegex: '(src/.*.unit.(ts|tsx)$)',
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js'],
  setupFilesAfterEnv: ['./bin/jestScript'],
}

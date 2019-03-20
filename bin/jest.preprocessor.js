const tsc = require('typescript')
const babelJest = require('babel-jest')
const tsConfig = require('../tsconfig.json')

const moduleFileExtensions = ['ts', 'tsx']

module.exports = {
  process(src, path) {
    if (moduleFileExtensions.some(extension => path.endsWith(extension))) {
      src = tsc.transpile(src, tsConfig.compilerOptions, path, [])
      src = babelJest.process(src, path, { moduleFileExtensions })
    }

    return src
  },
}

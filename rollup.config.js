import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript'

export default {
  input: 'src/index.tsx',
  output: {
    file: 'build/index.js',
    format: 'cjs',
  },
  external: [
    // Didn't find another way to not have errors during build
    'styled-components',
    'exenv',
    'react',
    'react-dom',
    'react-day-picker',
    'lodash.isempty',
    'lodash.isstring',
    'lodash.isequal',
    'lodash.debounce',
    'react-transition-group/Transition',
    'react-transition-group/TransitionGroup',
    'focus-trap',
    'country-telephone-data',
  ],
  plugins: [resolve(), typescript(), babel()],
}

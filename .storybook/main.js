// const babelConfig = require('../.babelrc')

module.exports = {
  stories: ['../src/colors/story.(mdx|tsx)'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
      exclude: /node_modules/,
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}

// stories: ['../src/**/story.(mdx|tsx)'],

// module.exports = ({ config }) => {
//   // Remove storybook's default javascript loading config
//   config.module.rules = config.module.rules.filter(rule => !String(rule.test).includes('js'))

//   config.module.rules.unshift({
//     test: /\.(ts|tsx|js)$/,
//     use: [
//       {
//         loader: 'babel-loader',
//         options: {
//           ...babelConfig,
//           // Needed because we're mixing module.exports (in the js files) and module exports, (storybook's webpack was getting confused)
//           // See https://babeljs.io/docs/en/options#sourcetype
//           sourceType: 'unambiguous',
//         },
//       },
//       {
//         loader: require.resolve('react-docgen-typescript-loader'),
//         options: {
//           shouldExtractLiteralValuesFromEnum: true,
//         },
//       },
//     ],
//     exclude: /node_modules/,
//   })
//   config.resolve.extensions.push('.ts', '.tsx')

//   // Storysource
//   config.module.rules.push({
//     test: /\.stories\.tsx?$/,
//     loader: require.resolve('@storybook/source-loader'),
//     options: { parser: 'typescript' },
//     enforce: 'pre',
//   })

//   return config
// }

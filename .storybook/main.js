const path = require('path')

module.exports = {
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {
            enforce: 'pre',
          },
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
  stories: ['../src/**/story.(tsx|mdx)', '../src/**/*.story.(tsx|mdx)'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    {
      name: '@storybook/addon-storysource',
    },
  ],
}

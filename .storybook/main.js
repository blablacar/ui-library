module.exports = {
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
  stories: ['../src/**/story.(tsx|mdx)', '../src/**/*.story.(tsx|mdx)'],
  addons: [
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
}

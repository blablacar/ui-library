const path = require('path')

module.exports = {
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true, loose: true }]],
            plugins: [
              ["@babel/plugin-proposal-class-properties", { "loose": true }],
            ],
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
            shouldExtractLiteralValuesFromEnum: true,
          },
        },
      ],
    })

    config.resolve.extensions.push('.ts', '.tsx')
    // https://github.com/storybookjs/storybook/issues/11255#issuecomment-713083086
    config.resolve.alias['core-js/modules'] = '@storybook/core/node_modules/core-js/modules'
    config.resolve.alias['core-js/features'] = '@storybook/core/node_modules/core-js/features'
    return config
  },
  stories: ['../src/**/*.story.mdx'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
}

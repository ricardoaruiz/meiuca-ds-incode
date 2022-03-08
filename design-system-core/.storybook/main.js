const webpackBase = require('../webpack.config.development')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": "@storybook/web-components",
  core: {
    builder: "webpack5"
  },
  webpackFinal: (config) => {
    const webpackConfig = webpackBase();
    config.module.rules.push(...webpackConfig.module.rules)

    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
            {
                from: 'node_modules/@ricardoaruiz/design-tokens/dist/css/globals.css',
                to: 'tokens/globals.css'
            },
            {
                from: '**/**/*.css',
                context: 'node_modules/@ricardoaruiz/design-tokens/dist/css',
                to: 'tokens/[path]/[name][ext]'
            }
        ]
    }))

    return config
  }
};
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  "stories": [
    "../src/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });
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
    }));
    return config;
  }
}
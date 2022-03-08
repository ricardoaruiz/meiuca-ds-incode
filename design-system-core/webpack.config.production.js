const { merge } = require('webpack-merge');

const webpackConfigCommons = require('./webpack.config.commons')
const entries = require('./webpack_entries.json');

module.exports = () => {
    const webpackConfigProduction = {
        mode: 'production',
        entry: entries,
        performance: {
          hints: false,
          maxEntrypointSize: 512000,
          maxAssetSize: 512000
        },
        externals: [
            /lit/gi,
            /lit\/decorators/gi,
            /lit\/directives\/class-map/gi,
            /lit\/directives\/if-defined/gi,
            /@ricardoaruiz/gi,
        ]
    }

    return merge(webpackConfigCommons, webpackConfigProduction)
}
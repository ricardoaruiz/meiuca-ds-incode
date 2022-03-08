const { merge } = require('webpack-merge');
const path = require('path')
const webpackConfigCommons = require('./webpack.config.commons')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = () => {
    const webpackConfigDev = {
        mode: 'development',
        entry: '/src/index.ts',
        devtool: 'inline-source-map',
        devServer: {
            port: 8080,
            open: true,
            historyApiFallback: {
                index: 'index.html'
            }
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html'),
                filename: 'index.html',
                title: 'Design System Core',
                inject: 'body'
            }),
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
            })
        ],
    }

    return merge(webpackConfigCommons, webpackConfigDev)
}
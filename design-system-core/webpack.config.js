const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'components.[contenthash].js',
        libraryTarget: 'umd',
        library: 'design-system-core'
    },
    devServer: {
        port: 8080,
        open: true,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
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
    module: {
        rules: [
            { test: /\.css$/i, use: ['style-loader','css-loader'] },
            { 
                test: /\.s[ac]ss$/i, 
                use: [
                    'sass-to-string',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                outputStyle: 'compressed'
                            }
                        }
                    }
                ]
            },
            { 
                test: /\.m?js$/i , 
                exclude: /(node_modules)/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
        ]
    }

}
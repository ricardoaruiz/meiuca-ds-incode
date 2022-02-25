const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            title: 'Design System Core',
            inject: 'body'
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
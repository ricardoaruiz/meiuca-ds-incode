const path = require('path')
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'components/[name].js',
        libraryTarget: 'umd',
        library: 'design-system-core',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new TypescriptDeclarationPlugin({
            out: 'index.d.ts',
            removeMergedDeclarations: true,
            removeComments: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                  configFile: "tsconfig.json"
                }
            },
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
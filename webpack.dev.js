const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: './src/index.js',
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, "dist")
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'eslint-loader',
                options: {
                    fix: true,
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        // creates style nodes from JS strings
                        loader: "style-loader",
                        options: {
                            injectType: 'singletonStyleTag'
                        }
                    },
                    {
                        // translates CSS into CommonJS
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // compiles Sass to CSS
                        loader: "sass-loader",
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                            sourceMapContents: true
                        }
                    }
                    // Please note we are not running postcss here
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true
        })
    ]
};

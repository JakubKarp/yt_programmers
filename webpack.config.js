const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.bundle.js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                      },
                      {
                        loader: "css-loader" // translates CSS into CommonJS
                      },
                      {
                        loader: "sass-loader" // compiles Sass to CSS
                      }
                ]
            }
        ]
    }
}
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AppManifestWebpackPlugin = require('app-manifest-webpack-plugin')
const assets = path.resolve(__dirname,'public/assets')

module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(tsx|ts)$/,
                use: [{loader: 'awesome-typescript-loader'}]
            },
            {
                test: /\.css$/,
                use: [{loader: 'css-loader'}]
            },
            {
                test: /\.(sass|scss)$/,
                use: [{loader: "sass-loader"}]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    },
    devServer: {
        port: 8880,
        contentBase: path.resolve(__dirname, 'dist/')
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public/index.html')}),
        /*new AppManifestWebpackPlugin(
            {
                logo: 'logo192.png',
                config: {
                    path: assets
                }
            },{
                logo:'favicon.ico',
                config:{
                    path: assets
                },

            }
        )*/
    ]
}

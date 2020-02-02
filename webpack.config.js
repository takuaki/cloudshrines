const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [{
  entry: path.resolve(__dirname, 'src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        options: {compact: false},
        exclude: /node_modules/
      },
      {
        test: /\.(tsx|ts)$/,
        use: [{loader: 'awesome-typescript-loader'}],
        exclude: /node_modules/
      },
      {
        test: /\.(css|sass|scss)$/,
        //use: ["style-loader", "css-loader", "sass-loader"],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.svg$/,
        use: [{loader: 'svg-inline-loader'}]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [{loader: "file-loader"}]
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
    contentBase: path.resolve(__dirname, 'dist/'),
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public/index.html')}),
    new ExtractTextPlugin('[name].css')
  ]
}]

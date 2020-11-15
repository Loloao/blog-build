const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const getAbsolutePath = (str) => path.resolve(__dirname, str)

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 8001,
    hot: true,
    compress: true,
    contentBase: '../dist',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.txs?$/,
        exclude: /node_modules/,
        include: [getAbsolutePath('src')],
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          emitError: true,
          fix: true,
        },
      },
    ],
  },
  devtool: 'cheap-eval-inline-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
})

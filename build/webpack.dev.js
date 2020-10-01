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
  devtool: 'cheap-eval-inline-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
})

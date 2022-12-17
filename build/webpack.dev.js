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
    // contentBase: '../dist',
    historyApiFallback: true
  },
  stats: {
    colors: true,
    children: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    builtAt: false,
    entrypoints: false,
    assets: false,
    version: false
  },
  devtool: 'cheap-module-source-map'
})

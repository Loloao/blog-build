const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const baseConfig = require('./webpack.base')

const getAbsolutePath = (str) => path.resolve(__dirname, str)

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
})

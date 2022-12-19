const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config')

const getAbsolutePath = (str) => path.resolve(__dirname, str)
const isDev = process.env.NODE_ENV === config.env.development
const cssLoaderConfig = {
  use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
}

const webpackConfig = {
  entry: getAbsolutePath('../src/index.tsx'),
  output: {
    filename: 'bundle.[name].js',
    path: getAbsolutePath('../dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
    alias: {
      '@': getAbsolutePath('../src'),
      '@common': getAbsolutePath('../src/common'),
      '@styles': getAbsolutePath('../src/styles')
    }
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|bmp|png|webp|gif|svg|eot|woff|woff2|ttf)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: 'img/[name].[hash:8].[ext]'
        }
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [getAbsolutePath('src')],
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          emitError: true,
          fix: true
        }
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        include: getAbsolutePath('../src'),
        options: {
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-runtime',
            'transform-class-properties'
          ],
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
        }
      },
      {
        test: /\.css$/,
        ...cssLoaderConfig
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'my-blog',
      filename: 'index.html',
      template: getAbsolutePath('../index.html'),
      inject: true
    })
  ]
}

if (!isDev) {
  webpackConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    })
  )
}

module.exports = webpackConfig

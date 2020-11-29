const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config')
const Webpack = require('webpack')

const getAbsolutePath = (str) => path.resolve(__dirname, str)
const isDev = process.env.NODE_ENV === config.env.development

const webpackConfig = {
  entry: getAbsolutePath('../src/index.tsx'),
  output: {
    filename: 'bundle.[hash].js',
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
        test: /\.(jpg|jpeg|bmp|png|webp|gif)$/,
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
          plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-runtime'],
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        loader: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          '@teamsupercell/typings-for-css-modules-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        include: /normalize.css/,
        loader: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  devtool: 'cheap-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'my-blog',
      filename: 'index.html',
      template: getAbsolutePath('../index.html'),
      inject: true
    }),
    new Webpack.WatchIgnorePlugin([/(c|sa|sc)ss\.d\.ts$/])
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

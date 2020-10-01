const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const getAbsolutePath = (str) => path.resolve(__dirname, str)

module.exports = {
  entry: getAbsolutePath('../src/index.tsx'),
  output: {
    filename: 'bundle.[hash].js',
    path: getAbsolutePath('../dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        include: getAbsolutePath('../src'),
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        },
      },
    ],
  },
  devtool: 'cheap-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'my-blog',
      filename: 'index.html',
      template: getAbsolutePath('../index.html'),
      inject: true,
    }),
  ],
}

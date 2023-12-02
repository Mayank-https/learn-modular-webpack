const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/mock.html',
      filename: 'index.html'
    })
  ]
}
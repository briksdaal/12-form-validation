const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  optimization: {
    usedExports: true,
  },
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Form Validation',
    }),
  ],
  devServer: {
    static: './dist',
    watchFiles: ['src/**/*.js', 'src/**/*.css'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|webp|svg|jpg|jpeg|gif|avif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
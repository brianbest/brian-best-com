const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/app.js')
  },
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    static: "./dist",
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Brian's Website"
    })
  ]
}
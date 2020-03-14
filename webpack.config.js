const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({  
      filename: 'index.html',
      template: 'src/index.html',
      templateParameters: {
        title: 'Webpack example',
        text: 'Hello world!',
      },
      hash: true
    }),
    new MiniCSSExtractPlugin({
      filename: "./css/styles.css",
    })
  ],
  module: {
    rules: [
      { 
        test: /\.scss$/, 
        loader: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    main: './source/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({  
      filename: 'index.html',
      template: 'source/index.html',
      templateParameters: {
        title: 'Webpack example',
        text: 'Hello world!',
      },
      hash: true
    }),
    new MiniCSSExtractPlugin({
      filename: "./styles.css",
    }),
    new WorkboxPlugin.GenerateSW()
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
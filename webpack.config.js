const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

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
    new WorkboxPlugin.GenerateSW(),
    new WebpackPwaManifest({
      name: 'Webpack example',
      short_name: 'WPE',
      description: 'Hello world!',
      theme_color: '#f5f5f5',
      display: "standalone",
      orientation: "portrait",
      background_color: '#ffffff',      
      scope: "/",
      start_url: "/index.html",
      splash_pages: null,
      icons: [
        {
        src: path.resolve('source/assets/icon.png'),
        sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
        src: path.resolve('source/assets/large-icon.png'),
        size: '1024x1024' // you can also use the specifications pattern
        },
        {
        src: path.resolve('source/assets/maskable-icon.png'),
        size: '1024x1024',
        purpose: 'maskable'
        }
      ]
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
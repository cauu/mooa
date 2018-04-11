const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cleanPlugin = new CleanWebpackPlugin(['dist'], {
  verbose: true
});

const htmlPlugin = new HtmlWebPackPlugin({
  template: "src/index.html",
  filename: "index.html"
});

const cssPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

module.exports = {
  entry: [
    __dirname + '/src/index.tsx',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /(\.ts|\.tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: { minimize: true }
      },
      {
        test: /\.(sass|scss)$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [cleanPlugin, htmlPlugin, cssPlugin]
};

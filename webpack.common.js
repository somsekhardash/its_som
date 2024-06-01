const path = require("path");
var webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.min.js",
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"), // added this
    },
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|json|svg|woff|woff2|ttf|eot)$/,
        loader: "file-loader",
        options: {
          name: "[name]-[hash:base64:5].[ext]",
          outputPath: "bundled_assets/",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: "./asset", to: "bundled_assets" }],
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "Production",
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new Dotenv(),
    new webpack.DefinePlugin({
      "process.env": {
        ABOUT_URL: JSON.stringify(process.env.ABOUT_URL),
        EDUCATION_URL: JSON.stringify(process.env.EDUCATION_URL),
        EXPERIENCE_URL: JSON.stringify(process.env.EXPERIENCE_URL),
        SKILLS_URL: JSON.stringify(process.env.SKILLS_URL),
        SITE_URL: JSON.stringify(process.env.SITE_URL),
        CONTACT_URL: JSON.stringify(process.env.CONTACT_URL),
        SECRET_KEY: JSON.stringify(process.env.SECRET_KEY),
        USER_NAME: JSON.stringify(process.env.USER_NAME),
        PASS_WORD: JSON.stringify(process.env.PASS_WORD),
      },
    }),
  ],
};

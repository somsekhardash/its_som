const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "Production",
    }),
  ],
};

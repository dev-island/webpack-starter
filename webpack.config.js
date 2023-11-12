const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};

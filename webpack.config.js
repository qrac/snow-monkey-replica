const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
  entry: {
    "snow-monkey-replica": path.resolve(
      __dirname,
      "./tasks/",
      "snow-monkey-replica.js"
    ),
    "snow-monkey-replica-g-style": path.resolve(
      __dirname,
      "./tasks/",
      "snow-monkey-replica-g-style.js"
    ),
    "snow-monkey-replica-g-theme": path.resolve(
      __dirname,
      "./tasks/",
      "snow-monkey-replica-g-theme.js"
    ),
    "snow-monkey-replica-sm-style": path.resolve(
      __dirname,
      "./tasks/",
      "snow-monkey-replica-sm-style.js"
    ),
    "snow-monkey-replica-sm-custom-widgets": path.resolve(
      __dirname,
      "./tasks/",
      "snow-monkey-replica-sm-custom-widgets.js"
    ),
    "snow-monkey-replica-smb-blocks": path.resolve(
      __dirname,
      "./tasks/",
      "snow-monkey-replica-smb-blocks.js"
    ),
    "snow-monkey-replica-smb-all": path.resolve(
      __dirname,
      "./tasks/",
      "snow-monkey-replica-smb-all.js"
    ),
    "snow-monkey-replica-sme-app": path.resolve(
      __dirname,
      "./tasks/",
      "snow-monkey-replica-sme-app.js"
    ),
  },
  output: {
    filename: "temp/[name].js",
    path: path.join(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "webpack-import-glob-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        loader: "url-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `./[name].css`,
    }),
  ],
});

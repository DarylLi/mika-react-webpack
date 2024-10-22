const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackDevServer = require("webpack-dev-server");

const webpack = require("webpack");
const config = {
  mode: "development",
  entry: {
    main: path.join(__dirname, "/src/main.js"),
    app: path.join(__dirname, "/src/app.jsx"),
  },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "[name].bundle.js",
    libraryTarget: "umd",
    library: "[name]_mika",
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 正则匹配以.css结尾的文件
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/, // 正则匹配以.scss和.sass结尾的文件
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jsx?)|(tsx?)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets:
                    "iOS 9, Android 4.4, last 2 versions, > 0.2%, not dead",
                },
              ],
              ["@babel/preset-react"],
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "img/[name].[hash:7].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

const devserver = new WebpackDevServer(
  {
    headers: { "Access-Control-Allow-Origin": "*" },
    hot: true, // 热更新
    host: "127.0.0.1", // 地址
    port: "8081", // 端口
    open: true, // 是否自动打开
    setupExitSignals: true,
    compress: true,
  },
  webpack(config)
);
devserver.start();

module.exports = config;

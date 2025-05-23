const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      http: false,
      https: false,
      zlib: false,
      stream: false,
      util: false,
      url: false,
      crypto: false,
      assert: false,
    },
  },
  devServer: {
    static: path.join(__dirname, "public"),
    port: 3001,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Auth",
      filename: "remoteEntry.js",
      exposes: {
        "./RegistrationPage":
          "./src/pages/RegistrationPage/RegistrationPage.jsx",
        "./LoginPage": "./src/pages/LoginPage/LoginPage.jsx",
        "./LogoutPage": "./src/pages/LogoutPage/LogoutPage.jsx",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^19.1.0" },
        "react-dom": { singleton: true, requiredVersion: "^19.1.0" },
        "react-router-dom": { singleton: true, requiredVersion: "^7.6.0" },
        "react-toastify": { singleton: true, requiredVersion: "^11.0.5" },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

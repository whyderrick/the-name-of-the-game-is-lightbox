module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-es2015"],
          },
        },
      },
      {
        test:/\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

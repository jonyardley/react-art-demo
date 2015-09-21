module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: "babel-loader", exclude: /node_modules/
      }
    ]
  }
};

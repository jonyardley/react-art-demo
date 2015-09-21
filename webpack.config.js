const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, "es6"),
        loader: "babel-loader"
      }
    ]
  }
};

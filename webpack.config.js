var HTMLWebpackPlugin = require('html-webpack-plugin');




module.exports = {
    entry: "./app/index.js",
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
    },
    module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: 
}

const webpack = require('webpack');

const injectVariables = new webpack.DefinePlugin({
  process: {
    env: {
      NODE_ENV: JSON.stringify("development"),
      BROWSER: JSON.stringify('true'),
      SERVER: JSON.stringify('false')
    }
  }
});

module.exports = {
  entry: "./src/main.jsx",
  devtool: "source-map",
  output: {
    path: __dirname + '/src/',
    filename: "browser.js",
    chunkFilename: "browser-[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(jsx|es6)$/,
        exclude: /node_modules|examples/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.es6', '.json']
  },
  plugins: [
    injectVariables
  ]
};

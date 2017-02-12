module.exports = {
  entry: "./src/main.jsx",
  devtool: "source-map",
  output: {
    path: __dirname + '/src/',
    filename: "browser.js"
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|es6)$/,
        exclude: /node_modules|examples/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.json$/, loader: 'json'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.es6', '.json']
  }
};

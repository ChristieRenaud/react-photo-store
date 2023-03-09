const path = require('path') //added

module.exports = {
  output: {
    path: path.resolve('./build'), //added
    filename: '[name].pack.js',
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react'],
          },
        },
        exclude: /node_modules/,
        test: /\.js$/,
      },
    ],
  },
  entry: {
    index: './index',
  },
}

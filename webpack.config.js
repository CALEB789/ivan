const path = require('path');
module.exports = {
  entry: './js/home.js',
  output: {
    path: path.resolve("public", 'dist2'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
};
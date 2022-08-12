const path = require('path');
module.exports = {
  entry: './js/blog.js',
  output: {
    path: path.resolve("public", 'dist'),
    filename: 'blog.js'
  },
  devtool: 'eval-source-map',
};
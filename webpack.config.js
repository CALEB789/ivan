const path = require('path');
module.exports = {
  entry: './admin/main.js',
  output: {
    path: path.resolve("admin", 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
};
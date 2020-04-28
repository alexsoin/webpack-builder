const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '../src')
    }
  }
};

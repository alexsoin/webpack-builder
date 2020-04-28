const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/app.js') // точка входа
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '../src')
    }
  }
};

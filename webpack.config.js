const path = require('path');

const SRC_DIR = path.resolve(__dirname, "client", "src");
const SRC_FILE = path.resolve(SRC_DIR, "index.js");
const OUT_DIR = path.resolve(__dirname, "public");

module.exports={
  entry: SRC_FILE,
  output: {
    filename: 'bundle.js',
    path: OUT_DIR
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  mode: "development"
}
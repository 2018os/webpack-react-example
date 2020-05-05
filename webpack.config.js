const webpack = require('webpack');

const port = process.env.PORT || 3000;

module.exports = {
  // 개발환경
  mode: 'development',

  // 애플리케이션 시작 경로
  entry: './src/index.js',

  // 번들된 파일 경로
  output: {
    filename: 'bundle.[hash].js'
  },
};
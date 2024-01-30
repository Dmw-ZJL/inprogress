//对webpack配置别名
const path = require('path')
const CracoLessPlugin = require('craco-less');
const { name } = require('./package');

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
    },
    configure(config) {
      config.output.library = `${name}-[name]`;
      config.output.libraryTarget = 'umd';
      config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
      config.output.globalObject = 'window';
      return config;
    }
  },
  devServer: {
    port: 3191,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ]
}
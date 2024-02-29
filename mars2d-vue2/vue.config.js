// const webpack = require('webpack')

module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  outputDir: 'dist',
  lintOnSave: true, // 是否开启eslint
  productionSourceMap: false, // 不需要生产环境的 source map
  filenameHashing: true, // 文件名哈希
  // 它支持webPack-dev-server的所有选项
  devServer: {
    host: 'localhost', // 也可以直接写IP地址这样方便真机测试
    port: 2001, // 端口号
    open: true // 配置自动启动浏览器
  },
  css: {
    // 启用 CSS modules
    // requireModuleExtension: false,
    // 是否使用css分离插件
    extract: true,
    // 开启 CSS source maps，一般不建议开启
    sourceMap: false
  }
}

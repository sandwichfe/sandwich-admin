const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    resolve: {
      alias: {         /*为路径配置别名  @ 就相当于 src */
        'assets': '@/assets',
        'commons': '@/commons',
        'components': '@/components',
        'views': '@/views',
        'network': '@/network',
      }
    }
  },
  
  devServer: {
    // 项目运行时候的端口号
    port: 3000
  }

})

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  // 网页打包 网页名称相关配置
  chainWebpack: config =>{
    config.plugin('html').tap(args => {
        args[0].title = '一如';
        return args;
    })
  },

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
    hot:true,
    // 项目运行时候的端口号
    port: 3000
  }

})

// postcss.config.js
// vant设计稿的尺寸是基于宽375设计的，其它尺寸可以将rootValue配置调整
module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue ({ file }) {
        // console.log('Rem file : %s', file)
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}

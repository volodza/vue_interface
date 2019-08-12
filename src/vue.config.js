module.exports = {
  css: {
    modules: true
  },
  // chainWebpack: config => {
  //   const Sprite = config.module.rule('svg-sprite')
  
  //   Sprite
  //     .test(/\.(svg)(\?.*)?$/)
  //     .include
  //      // указываем путь к папке с иконками что бы не было конфликтов(например со шрифтами)
  //       .add(path.resolve(__dirname,'src/assets/img/icons'))
  //     .end()                   
  //     .use('file-loader')
  //       .loader('file-loader')
  //       .options( {
  //         name: 'static/img/[name].[hash:8].[ext]'
  //       })              
      
  //   Sprite
  //     .use('file-loader')
  //     .loader('svg-sprite-loader')

  // }  

}
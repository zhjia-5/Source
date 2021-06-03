/* 
  vue-cli的配置文件:
  如何解决开发服务器跨域问题？
  module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/myblog/' : '/',
  devServer: {
    proxy: {//代理
       // target：表示请求的服务器，

      //如果网路请求的location.pathname以"/shakespeare"开头就转到简书的服务器("https:www.jianshu.com")去请求，
      // 最终请求地址将会变成"https://www.jianshu.com/shakespeare/v2/notes/99997a54c9bc/book"
      // 本机开发服务器访问简述的服务器都是node环境，不存在跨域问题
      "/shakespeare": { target: "https://www.jianshu.com" },
      "/api": { target: "https://test.my-site.com" },

    }
  },
}
*/

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/myblog/' : '/',
}


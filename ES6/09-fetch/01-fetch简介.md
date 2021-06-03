# Fetch Api 概述

**XMLHTTRequest的问题（ajax）**

1. 所有的功能全部集中在同一个对象上，容易书写出混乱不易维护的代码
2. 采用传统的事件驱动模式，无法适配新的Promise Api

**Fetch Api 的特点**

1. 并非取代 ajax ,而是对ajax传统api的改进
2. 精细的功能分割：头部信息、请求信息、响应信息等均分布到不同的对象，更利于处理各种复杂的Ajax场景
3. 使用Promise Api ，更利于异步代码的书写
4. Fetch Api并非es6的知识，属于HTML5新增的web API，（浏览器环境）
5. 需要掌握网络通讯知识


**fetch(url,responseObj)基本使用:**

#  该函数接收两个参数：
  1. url 必选：字符串，请求地址：'http://101.132.72.36:5100/api/local'
  2. responseObj 可选，对象，请求配置：
    （1）请求配置对象的属性：
          method:字符串，请求方法，默认值GET
          headers:对象，请求头信息
          body:请求体的内容，必须匹配请求头中的Content-Type.(如果是get请求放到url里面)
          mode:字符串，请求模式
              cors:默认值，配置为该值，会在请求投中加入origin referer
              on-cors:配置为该值，不会在请求投中加入origin 和heferer，跨域时可能出问题。
              same-origin:指示请求必须在同一个域中发生，如果请求其他域，则会报错。
          credentials:如何携带凭据
          cache配置缓存模式

    演示：
          const url = 'http://api.duyiedu.com/api/student/findAll?appkey=zhjia_1611123253059';
          const config = {
              method:'get',
              Headers:{
                  "Content-Type":"application/json",
                  aaa:111
              },
              body:{
                name:"zhangsan",
                password:123456
              }
          }       
          fetch(url,config);

#  fetch 返回值：Promise对象

    当收到服务器的返回结果后，Promise进入resolved状态，状态数据为Response对象
    当网络发生错误（或其他导致无法完场交互式的错误）时，Promise进入rejected状态
    状态数据为错误信息59090
    Response对象
      - ok ：boolean ，当相应信息码在200~299之间时为true，其他为false
      - status ：number，响应的状态码
      - text() : 返回一个被解析为string 对象的 Promise。返回Promise的原因是因为解析需要时间。
      - blob() : 用于处理二进制文本格式（比如图片，电子表格）的Ajax响应。
                  它读取文件的原始数据，一旦读取完整个文件，就返回一个
                  被解决的blob对象的Promise.

      - json() : 用于处理JSON格式的Ajax的响应。 它将JSON数据流转为一个被解决为
                  JavaScript对象的Promise。返回Promise的原因是因为解析需要时间。

      - redirect():可以用于重定向到另一个URL，他会创建一个新的Promise，
                    已解决来自重定向的URL的响应。      


#  Request 对象
  除了使用基本的fetch方法，还可以通过创建一个Request对象来完成请求（实际上，fetch的内部会帮你创建一个Request对象）

  ```js
    new Request(url,配置对象);
  ```

  注意：尽量保证每次请求都是一个新的Request对象，也就是每次都要使用 new Request();





#  模拟移动端的meta,如果没有meta标签，浏览器默认视口宽度为980px。
    一：<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,
            maximum-scale=1.0,user-scalable=no">
       1） width： 可视区宽度
            width=device-width:   将视口的宽度 = 设备宽度
            解决当iphone或者iPad上横屏的width = 竖屏的width时不能自适应的问题。
        
        2）initial-scale=1.0:  等同于 width = device-width
            解决当window系统的手机端横屏的width = 竖屏的width时不能自适应的问题。

        3）minimum-scale=1.0： 最小缩放比
            maximum-scale=1.0： 最大缩放比

        4）user-scalable： 是否允许用户缩放

        5）1css 像素  == 1 是设备像素    
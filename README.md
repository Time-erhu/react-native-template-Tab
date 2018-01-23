# react-native-template-Tab

一：项目创建

 背景：
 当我们新建项目时，需要使用如下命令：
 
 
 react-native init XXXX
 
 
 此时，新建的项目只包含一些官方提供的基础代码，而当我们想要去使用某些项目内的工具方法，包括适配，图片等时，就需要进行代码迁移
 而一些经常使用的第三方也需要我们进行重新依赖。
 
 
 Template：
 
 当我们新建项目时，使用如下命令：
 
 react-native init XXXX  --template tab
 
 此时，新建的项目不仅包含官方提供的基础源码，也包含一些此库的方法。
 
 此库主要包含以下两个方面：
 
 1-：一些常用方法，开发技巧。
 
   包括一些适配已经一些实例
   
 2-：一些常用功能的路由配置
 
    包括TAB，一些页面跳转。
   
 2-：此库路由包含以下两种方式：

     -1:react-native-router-flux
     
     -2:react-navigation
 
 

二：资源管理
1-：使用模版文件时，自动init项目，带有部分源码,包括快速搭建基础项目结构。

2-：项目中常用的封装都放在jscode目录下common文件夹
1、FontSize.js：基于屏幕分辨率封装的字体适配方法，使用方法：fontSize:FONT_SIZE(14)

2、global.js：全局变量方法，比如说：系统判断，屏幕宽高，主题设置，图片初始化。 具体的详情可以查看global.js内部注释。

3、Config.js：配置文件，可以用来配置请求网址，配置表等等。

4、Request.js：基于react-native-fetch-blob封装的网络请求方法。

5、ImageUtil.js：在image目录下Images.js和Img两个文件夹，进行全局的文件管理。


三：更细日志：

2018-01-23:

1、更新基础版本，init项目，自带Tab，包含部分基础的源码以及一些开发常用的组建封装

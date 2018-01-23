# react-native-template-Tab

一：项目创建

本项目参照兔子的模版项目：https://github.com/SurpassRabbit/react-native-template

此库地址：https://github.com/Time-erhu/react-native-template-Tab

本人只是做了一些优化在此，表示感谢，🙏🙏。此次版本只做了下封装，期待后期的改版。

另：对React-Native-CodeStyle进行了升级维护，库地址也做了迁移，欢迎围观。

 1：背景：
 当我们新建项目时，需要使用如下命令：
 
```
 react-native init XXXX
 ```
 
 此时，新建的项目只包含一些官方提供的基础代码，而当我们想要去使用某些项目内的工具方法，包括适配，图片等时，就需要进行代码迁移
 而一些经常使用的第三方也需要我们进行重新依赖。
 
 
 Template：
 
 当我们新建项目时，使用如下命令：
 ```
 react-native init XXXX  --template tab
```
 
 此时，新建的项目不仅包含官方提供的基础源码，也包含一些此库的方法。
 
 此库主要包含以下两个方面：
 
 1-：一些常用方法，开发技巧。
 
   包括一些适配已经一些实例
   
 2-：一些常用功能的路由配置
 
    包括TAB，一些页面跳转。
   
 2-：此库路由包含以下两种方式：
```

     -1:react-native-router-flux
     
     -2:react-navigation

```
     
 针对此模版文件，本库自带以下第三方组件：
```
      -1:路由  react-native-router-flux
      -2:网络相关库  react-native-fetch-blob

```

 
2:运行项目，因为使用了Template，所以通过此模版命令新建的项目，运行起来有所不同，具体请参照以下步骤：

1-：在终端中进入项目所在目录或者在编辑器中项目的Terminal中执行依次以下命令：

```
 npm install react-native-router-flux --save
 
 npm install react-native-fetch-blob
```
 
2-：等以上命令执行完毕，继续执行如下命令

```
react-native link
 
```
3-：运行项目，执行以下某个命令：

```
react-native run-ios

react-native run-android
 
```
小提示：推荐使用yarn来进行第三方包管理

二：资源管理
1-：使用模版文件时，自动init项目，带有部分源码,包括快速搭建基础项目结构。

2-：项目中常用的封装都放在jscode目录下common文件夹
1、FontSize.js：基于屏幕分辨率封装的字体适配方法，使用方法：fontSize:FONT_SIZE(14)

2、global.js：全局变量方法，比如说：系统判断，屏幕宽高，主题设置，图片初始化。 具体的详情可以查看global.js内部注释。

3、Config.js：配置文件，可以用来配置请求网址，配置表等等。

4、Request.js：基于react-native-fetch-blob封装的网络请求方法。

5、ImageUtil.js：在image目录下Images.js和Img两个文件夹，进行全局的图片管理。


三：更新日志：

2018-01-23:

1、更新基础版本，init项目，自带Tab，包含部分基础的源码以及一些开发常用的组建封装

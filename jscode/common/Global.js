import React, { Component } from 'react';
import { Dimensions, PixelRatio, Platform } from 'react-native';

import ImageUtil from '../image/ImageUtil'
// 统一管理项目中的路由
import { Actions } from "react-native-router-flux";

//图片上传或得网络格式
import Request from './Request'
// 处理安卓，iOS字体不同的类，使用方法 fontSize:FONT_SIZE(20)
import FontSize from './FontSize';

// 通过系统API获得屏幕宽高
let { height, width } = Dimensions.get('window');

// 系统是iOS
global.iOS = (Platform.OS === 'ios');
// 系统是安卓
global.Android = (Platform.OS === 'android');

// 获取屏幕宽度
global.SCREEN_WIDTH = width;
// 获取屏幕高度
global.SCREEN_HEIGHT = height;
// 获取屏幕分辨率
global.PixelRatio = PixelRatio.get();
// 最小线宽
global.pixel = 1 / PixelRatio;
// 适配字体
global.FONT_SIZE = FontSize;
// router跳转的方法
global.Actions = Actions;

global.ImageUtil = ImageUtil;
global.Request = Request;

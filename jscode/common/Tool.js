import {
    AsyncStorage,
    Platform
} from 'react-native';
// 设计图上的比例，宽度
let basePx = Platform.OS === 'ios' ? 750 : 720;

exports.px2dp = function px2dp(px: number): number {
    return px / basePx * SCREEN_WIDTH;
};

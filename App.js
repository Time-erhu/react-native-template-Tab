import React from 'react';
import {
    StyleSheet
} from 'react-native';

import {
    Scene,
    Router,
    Actions,
    Reducer,
    Stack,
    Tabs
} from 'react-native-router-flux';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard'
import './jscode/common/Global'
import TabIcon from './jscode/component/TabIcon'
import OneTabPage from './jscode/page/OneTabPage'
import TwoTabPage from './jscode/page/TwoTabPage'
import ThreeTabPage from './jscode/page/ThreeTabPage'

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    };
};

const getSceneStyle = () => ({
    backgroundColor: '#F5FCFF',
    shadowOpacity: 1,
    shadowRadius: 3,
});

const onBackPress = () => {
    if (Actions.state.index !== 0) {
        return false
    }
    Actions.pop();
    return true
};

const App = (...props) => (
    <Router createReducer={reducerCreate}
            getSceneStyle={getSceneStyle}
            backAndroidHandler={onBackPress}>
        <Stack hideNavBar headerMode='screen' key="Home"
               transitionConfig={()=>({
                   screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid
               })}
               onTransitionStart={()=>{
                   //页面跳转时，自动隐藏键盘
                   dismissKeyboard();
               }}
               onTransitionEnd={()=>{
               }}>
            <Tabs
                key="HomeTab"        // 唯一标识
                wrap={true}         // 自动使用自己的导航栏包装每个场景
                showLabel={false}   // 显示文字
                tabBarStyle={styles.tabBarStyle} // TabBar的样式
                swipeEnabled={false}// 是否可以滑动
                headerMode='screen' // 页面切换方式
                icon={TabIcon}      // 自定义Icon显示方式
                lazy={true}         // 是否默认渲染TabBar
                tabBarPosition={'bottom'}       // TabBar在顶部还是底部，iOS默认顶部，安卓默认顶部
                activeBackgroundColor='white'   // 选中TabBar的背景色
                inactiveBackgroundColor='white' // 未选中TabBar的背景色
                activeTintColor='#4ECBFC'       // 选中TabBar图标的颜色
                inactiveTintColor='#aaa'        // 未选中TabBar图标的颜色
            >
                <Stack key="OneTabPage"
                       title={'OneTabPage'}
                       image={ImageUtil.oneTab}
                       selectedImage={ImageUtil.oneTabOn}
                >
                    <Scene component={OneTabPage} key="OneTabPage"/>
                </Stack>
                <Stack key="TwoTabPage"
                       title={'TwoTabPage'}
                       image={ImageUtil.twoTab}
                       selectedImage={ImageUtil.twoTabOn}
                >
                    <Scene component={TwoTabPage} key="TwoTabPage"/>
                </Stack>
                <Stack key="ThreeTabPage"
                       title={'ThreeTabPage'}
                       image={ImageUtil.threeTab}
                       selectedImage={ImageUtil.threeTabOn}
                >
                    <Scene component={ThreeTabPage} key="ThreeTabPage"/>
                </Stack>
            </Tabs>
        </Stack>
    </Router>
);

export default App;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#eee',
        height:49,
    },
});

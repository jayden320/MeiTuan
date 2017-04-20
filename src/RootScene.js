/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { Router, Scene, Actions, Schema } from 'react-native-router-flux';

import color from './widget/color'
import screen from './common/screen'
import system from './common/system'
import TabBarItem from './widget/TabBarItem'

import HomeScene from './scene/Home/HomeScene'
import OrderScene from './scene/Order/OrderScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import MineScene from './scene/Mine/MineScene'

import WebScene from './widget/WebScene'
import GroupPurchaseScene from './scene/GroupPurchase/GroupPurchaseScene'

const animate = props => {
    const { position, scene } = props;

    const index = scene.index;
    const inputRange = [index - 1, index + 1];
    const outputRange = [screen.width, -screen.width];

    const translateX = position.interpolate({ inputRange, outputRange });
    return { transform: [{ translateX }] };
}


// create a component
class RootScene extends Component {
    render() {
        return (
            <Router
                ref='router'
                titleStyle={styles.navigationBarTitle}
                barButtonIconStyle={styles.navigationBarButtonIcon}
                navigationBarStyle={styles.navigationBarStyle}
                getSceneStyle={this.sceneStyle}
                panHandlers={null}
                animationStyle={animate}

                onSelect={el => {
                    const { sceneKey, statusBarStyle } = el.props
                    if (statusBarStyle) {
                        StatusBar.setBarStyle(statusBarStyle, false)
                    } else {
                        StatusBar.setBarStyle('default', false)
                    }
                    Actions[sceneKey]()
                }}
                onBack={(el) => {
                    if (el.sceneKey == 'home' && el.children.length == 2) {
                        StatusBar.setBarStyle('light-content', false)
                    }
                    Actions.pop()
                }}
            >

                <Scene
                    initial
                    key='tabBar'
                    tabs
                    tabBarStyle={styles.tabBar}
                    tabBarSelectedItemStyle={styles.tabBarSelectedItem}

                    tabBarSelectedTitleStyle={styles.tabBarSelectedTitle}
                    tabBarUnselectedTitleStyle={styles.tabBarUnselectedTitle}

                // tabBarSelectedImageStyle={styles.tabBarSelectedImage}
                // tabBarUnselectedImageStyle={styles.tabBarUnselectedImage}

                >
                    <Scene
                        key='home'
                        title='团购'
                        component={HomeScene}
                        image={require('./img/tabbar/pfb_tabbar_homepage@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected@2x.png')}

                        icon={TabBarItem}

                        navigationBarStyle={{ backgroundColor: color.theme }}
                        titleStyle={{ color: 'white' }}
                        statusBarStyle='light-content'

                    />
                    <Scene
                        key='merchant'
                        component={NearbyScene}
                        title='附近'
                        image={require('./img/tabbar/pfb_tabbar_merchant@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected@2x.png')}

                        icon={TabBarItem}
                    />
                    <Scene
                        key='order'
                        component={OrderScene}
                        title='订单'
                        image={require('./img/tabbar/pfb_tabbar_order@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_order_selected@2x.png')}

                        icon={TabBarItem}
                    />
                    <Scene
                        key='mine'
                        component={MineScene}
                        title='我的'
                        image={require('./img/tabbar/pfb_tabbar_mine@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}

                        icon={TabBarItem}

                        hideNavBar
                        statusBarStyle='light-content'
                    />
                </Scene>

                <Scene key='web' component={WebScene} title='加载中' hideTabBar clone />
                <Scene key='groupPurchase' component={GroupPurchaseScene} title='团购详情' hideTabBar clone />


            </Router>
        );
    }


    sceneStyle = (props: Object, computedProps: Object) => {
        const style = {
            flex: 1,
            backgroundColor: color.theme,
            // backgroundColor: '#ffffff',
            shadowColor: null,
            shadowOffset: null,
            shadowOpacity: null,
            shadowRadius: null,
            marginTop: 0,
            marginBottom: 0,
        };
        if (computedProps.isActive) {
            style.marginTop = computedProps.hideNavBar ? (system.isIOS ? 20 : 0) : (system.isIOS ? 64 : 54);
            style.marginBottom = computedProps.hideTabBar ? 0 : 50;
        }
        return style;
    };

}

// define your styles
const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#ffffff',
    },
    tabBarSelectedItem: {
        backgroundColor: '#ffffff',
    },

    tabBarSelectedTitle: {
        color: color.theme,
    },
    tabBarUnselectedTitle: {
        color: '#979797',
    },

    tabBarSelectedImage: {
        tintColor: color.theme,
    },
    tabBarUnselectedImage: {
        tintColor: '#979797'
    },

    navigationBarStyle: {
        backgroundColor: 'white'
    },
    navigationBarTitle: {
        color: '#333333'
    },
    navigationBarButtonIcon: {
        tintColor: color.theme
    },
});

//make this component available to the app
export default RootScene;

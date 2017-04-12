//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Router, Scene, Actions, Schema } from 'react-native-router-flux';

import color from './ui/color'

import system from './common/system'
import TabBarItem from './ui/TabBarItem'

import HomeScene from './scene/home/HomeScene'
import OnsiteScene from './scene/onsite/OnsiteScene'
import MerchantScene from './scene/merchant/MerchantScene'
import MineScene from './scene/mine/MineScene'

import WebScene from './ui/WebScene'

// create a component
class RootScene extends Component {
    render() {
        return (
            <Router
                titleStyle={styles.navigationBarTitle}
                barButtonIconStyle={styles.navigationBarButtonIcon}
                navigationBarStyle={styles.navigationBarStyle}
                getSceneStyle={this.sceneStyle}
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
                        image={require('./img/tabbar/icon_tabbar_homepage@2x.png')}
                        selectedImage={require('./img/tabbar/icon_tabbar_homepage_selected@2x.png')}

                        icon={TabBarItem}
                    />

                    <Scene
                        key='onsite'
                        component={OnsiteScene}
                        title='上门'
                        image={require('./img/tabbar/icon_tabbar_onsite@2x.png')}
                        selectedImage={require('./img/tabbar/icon_tabbar_onsite_selected@2x.png')}


                        icon={TabBarItem}
                    />
                    <Scene
                        key='merchant'
                        component={MerchantScene}
                        title='商家'
                        image={require('./img/tabbar/icon_tabbar_merchant_normal@2x.png')}
                        selectedImage={require('./img/tabbar/icon_tabbar_merchant_selected@2x.png')}


                        icon={TabBarItem}
                    />
                    <Scene
                        key='mine'
                        component={MineScene}
                        title='我的'
                        image={require('./img/tabbar/icon_tabbar_mine@2x.png')}
                        selectedImage={require('./img/tabbar/icon_tabbar_mine_selected@2x.png')}


                        icon={TabBarItem}
                    />
                </Scene>

                <Scene key='web' component={WebScene} title='加载中' hideTabBar clone />

            </Router>
        );
    }


    sceneStyle = (props, computedProps) => {
        const style = {
            flex: 1,
            backgroundColor: '#f7f7f7',
            // backgroundColor: '#ffffff',
            shadowColor: null,
            shadowOffset: null,
            shadowOpacity: null,
            shadowRadius: null,
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
        backgroundColor: '#f4f4f4',
    },
    tabBarSelectedItem: {
        backgroundColor: '#f4f4f4',
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
        backgroundColor: color.theme
    },
    navigationBarTitle: {
        color: 'white'
    },
    navigationBarButtonIcon: {
        tintColor: 'white'
    },
});

//make this component available to the app
export default RootScene;

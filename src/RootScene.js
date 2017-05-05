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
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import color from './widget/color'
import screen from './common/screen'
import system from './common/system'

import HomeScene from './scene/Home/HomeScene'
import OrderScene from './scene/Order/OrderScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import MineScene from './scene/Mine/MineScene'

import WebScene from './widget/WebScene'
import GroupPurchaseScene from './scene/GroupPurchase/GroupPurchaseScene'

// create a component
// class RootScene extends Component {
//     render() {
//         return (
//             <Router
//                 ref='router'
//                 titleStyle={styles.navigationBarTitle}
//                 barButtonIconStyle={styles.navigationBarButtonIcon}
//                 navigationBarStyle={styles.navigationBarStyle}
//                 getSceneStyle={this.sceneStyle}
//                 panHandlers={null}
//                 animationStyle={animate}

//                 onSelect={el => {
//                     const { sceneKey, statusBarStyle } = el.props
//                     if (statusBarStyle) {
//                         StatusBar.setBarStyle(statusBarStyle, false)
//                     } else {
//                         StatusBar.setBarStyle('default', false)
//                     }
//                     Actions[sceneKey]()
//                 }}
//                 onBack={(el) => {
//                     if (el.sceneKey == 'home' && el.children.length == 2) {
//                         StatusBar.setBarStyle('light-content', false)
//                     }
//                     Actions.pop()
//                 }}
//             >

//                 <Scene
//                     initial
//                     key='tabBar'
//                     tabs
//                     tabBarStyle={styles.tabBar}
//                     tabBarSelectedItemStyle={styles.tabBarSelectedItem}

//                     tabBarSelectedTitleStyle={styles.tabBarSelectedTitle}
//                     tabBarUnselectedTitleStyle={styles.tabBarUnselectedTitle}

//                 // tabBarSelectedImageStyle={styles.tabBarSelectedImage}
//                 // tabBarUnselectedImageStyle={styles.tabBarUnselectedImage}

//                 >
//                     <Scene
//                         key='home'
//                         title='团购'
//                         component={HomeScene}
//                         image={require('./img/tabbar/pfb_tabbar_homepage@2x.png')}
//                         selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected@2x.png')}

//                         icon={TabBarItem}

//                         navigationBarStyle={{ backgroundColor: color.theme }}
//                         titleStyle={{ color: 'white' }}
//                         statusBarStyle='light-content'

//                     />
//                     <Scene
//                         key='merchant'
//                         component={NearbyScene}
//                         title='附近'
//                         image={require('./img/tabbar/pfb_tabbar_merchant@2x.png')}
//                         selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected@2x.png')}

//                         icon={TabBarItem}
//                     />
//                     <Scene
//                         key='order'
//                         component={OrderScene}
//                         title='订单'
//                         image={require('./img/tabbar/pfb_tabbar_order@2x.png')}
//                         selectedImage={require('./img/tabbar/pfb_tabbar_order_selected@2x.png')}

//                         icon={TabBarItem}
//                     />
//                     <Scene
//                         key='mine'
//                         component={MineScene}
//                         title='我的'
//                         image={require('./img/tabbar/pfb_tabbar_mine@2x.png')}
//                         selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}

//                         icon={TabBarItem}

//                         hideNavBar
//                         statusBarStyle='light-content'
//                     />
//                 </Scene>

//                 <Scene key='web' component={WebScene} title='加载中' hideTabBar clone />
//                 <Scene key='groupPurchase' component={GroupPurchaseScene} title='团购详情' hideTabBar clone />
//             </Router>
//         );
//     }
// }


const MainTab = TabNavigator(
    {
        Home: { screen: HomeScene },
        Nearby: { screen: NearbyScene },
        Order: { screen: OrderScene },
        Mine: { screen: MineScene }
    },
    {
        tabBarComponent: TabBarBottom,
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: color.theme,
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },
    }

);

const RootScene = StackNavigator(
    {
        Tab: { screen: MainTab },
        Web: { screen: WebScene },
        GroupPurchase: { screen: GroupPurchaseScene },
    },
    {
        navigationOptions: {
            // headerStyle: { backgroundColor: color.theme }
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
        }
    }
);
//make this component available to the app
export default RootScene;
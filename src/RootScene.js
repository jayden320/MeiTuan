/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */


import React, { PureComponent } from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer, TabBarBottom } from 'react-navigation'

import color from './widget/color'
import { screen, system } from './common'
import TabBarItem from './widget/TabBarItem'

import HomeScene from './scene/Home/HomeScene'
import OrderScene from './scene/Order/OrderScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import MineScene from './scene/Mine/MineScene'

import WebScene from './widget/WebScene'
import GroupPurchaseScene from './scene/GroupPurchase/GroupPurchaseScene'

const lightContentScenes = ['Home', 'Mine']

function getCurrentRouteName(navigationState: any) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}


class RootScene extends PureComponent<{}> {
  constructor() {
    super()

    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
      <AppContainer
        onNavigationStateChange={
          (prevState, currentState) => {
            const currentScene = getCurrentRouteName(currentState)
            const previousScene = getCurrentRouteName(prevState)
            if (previousScene !== currentScene) {
              if (lightContentScenes.indexOf(currentScene) >= 0) {
                StatusBar.setBarStyle('light-content')
              } else {
                StatusBar.setBarStyle('dark-content')
              }
            }
          }
        }
      />
    )
  }
}

const Tab = createBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator({ Home: HomeScene }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '团购',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_homepage.png')}
            selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
          />
        )
      }),
    },
    Nearby: {
      screen: createStackNavigator({ Nearby: NearbyScene }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '附近',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_merchant.png')}
            selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
          />
        )
      }),
    },

    Order: {
      screen: createStackNavigator({ Order: OrderScene }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '订单',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_order.png')}
            selectedImage={require('./img/tabbar/tabbar_order_selected.png')}
          />
        )
      }),
    },

    Mine: {
      screen: createStackNavigator({ Mine: MineScene }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_mine.png')}
            selectedImage={require('./img/tabbar/tabbar_mine_selected.png')}
          />
        )
      }),
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: color.primary,
      inactiveTintColor: color.gray,
      style: { backgroundColor: '#ffffff' },
    },
  }
)

Tab.navigationOptions = {
  header: null,
};

const AppNavigator = createStackNavigator(
  {
    Tab: { screen: Tab },
    Web: { screen: WebScene },
    GroupPurchase: { screen: GroupPurchaseScene },
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerTintColor: '#333333',
      showIcon: true,
    },
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default RootScene

/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */


import React, { PureComponent } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import color from './widget/color'
import { screen, system } from './common'
import TabBarItem from './widget/TabBarItem'

import HomeScene from './scene/Home/HomeScene'
import OrderScene from './scene/Order/OrderScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import MineScene from './scene/Mine/MineScene'

const Tab = createBottomTabNavigator()

class TabScene extends PureComponent<{}> {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let normalImage
            let selectedImage
            if (route.name === 'Home') {
              normalImage = require('./img/tabbar/tabbar_homepage.png')
              selectedImage = require('./img/tabbar/tabbar_homepage_selected.png')
            } else if (route.name === 'Nearby') {
              normalImage = require('./img/tabbar/tabbar_merchant.png')
              selectedImage = require('./img/tabbar/tabbar_merchant_selected.png')
            } else if (route.name === 'Order') {
              normalImage = require('./img/tabbar/tabbar_order.png')
              selectedImage = require('./img/tabbar/tabbar_order_selected.png')
            } else if (route.name === 'Mine') {
              normalImage = require('./img/tabbar/tabbar_mine.png')
              selectedImage = require('./img/tabbar/tabbar_mine_selected.png')
            }
            return (
              <TabBarItem
                tintColor={color}
                focused={focused}
                normalImage={normalImage}
                selectedImage={selectedImage}
              />
            )
          },
        })}
        tabBarOptions={{
          activeTintColor: color.primary,
          inactiveTintColor: color.gray,
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScene}
          options={{ tabBarLabel: '团购' }}
        />
        <Tab.Screen
          name='Nearby'
          component={NearbyScene}
          options={{ tabBarLabel: '附近' }}
        />
        <Tab.Screen
          name='Order'
          component={OrderScene}
          options={{ tabBarLabel: '订单' }}
        />
        <Tab.Screen
          name='Mine'
          component={MineScene}
          options={{ tabBarLabel: '我的' }}
        />
      </Tab.Navigator>
    )
  }
}

export default TabScene

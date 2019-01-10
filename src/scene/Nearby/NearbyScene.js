/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */


import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'

import { Heading2, Heading3, Paragraph } from '../../widget/Text'
import { color, Button, NavigationItem, SpacingView } from '../../widget'
import { screen, system } from '../../common'
import api from '../../api'
import NearbyListScene from './NearbyListScene'

type Props = {
  navigation: any,
}


class NearbyScene extends PureComponent<Props> {

  static navigationOptions = ({ navigation }: any) => ({
    headerRight: (
      <TouchableOpacity style={styles.searchBar}>
        <Image source={require('../../img/home/search_icon.png')} style={styles.searchIcon} />
        <Paragraph>找附近的吃喝玩乐</Paragraph>
      </TouchableOpacity>
    ),
    headerLeft: (
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
        <Image style={{ width: 13, height: 16 }} source={require('../../img/public/icon_food_merchant_address.png')} />
        <Text style={{ fontSize: 15, color: '#333333' }}> 福州 鼓楼</Text>
      </TouchableOpacity>
    ),
    headerStyle: { backgroundColor: 'white' },
  })

  render() {
    let titles = ['享美食', '住酒店', '爱玩乐', '全部']
    let types = [
      ['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜'],
      ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠'],
      ['热门', 'KTV', '足疗按摩', '洗浴汗蒸', '电影院', '美发', '美甲'],
      []
    ]

    return (
      <ScrollableTabView
        style={styles.container}
        tabBarBackgroundColor='white'
        tabBarActiveTextColor='#FE566D'
        tabBarInactiveTextColor='#555555'
        tabBarTextStyle={styles.tabBarText}
        tabBarUnderlineStyle={styles.tabBarUnderline}
      // renderTabBar={() => <DefaultTabBar style={styles.tabBar}/>}
      >
        {titles.map((title, i) => (
          <NearbyListScene
            tabLabel={titles[i]}
            key={i}
            types={types[i]}
            navigation={this.props.navigation}
          />
        ))}
      </ScrollableTabView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.paper
  },
  searchBar: {
    width: screen.width * 0.65,
    height: 30,
    borderRadius: 19,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    alignSelf: 'center',
    marginRight: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    margin: 5,
  },
  tabBarText: {
    fontSize: 14,
    marginTop: 13,
  },
  tabBarUnderline: {
    backgroundColor: '#FE566D'
  },
})


export default NearbyScene

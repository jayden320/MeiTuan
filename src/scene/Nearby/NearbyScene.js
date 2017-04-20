/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import SpacingView from '../../widget/SpacingView'
import RefreshListView, { RefreshState } from '../../widget/RefreshListView'
import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import color from '../../widget/color'
import NavigationItem from '../../widget/NavigationItem'
import Button from '../../widget/Button'

import screen from '../../common/screen'
import system from '../../common/system'
import api from '../../api'
import NearbyListScene from './NearbyListScene'

// create a component
class NearbyScene extends Component {
    
    static renderTitle = () => {
        return (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../img/Home/search_icon.png')} style={styles.searchIcon} />
                <Paragraph>找附近的吃喝玩乐</Paragraph>
            </TouchableOpacity>
        );
    }

    static renderLeftButton = () => {
        return (
            <NavigationItem
                icon={require('../../img/Public/icon_food_merchant_address@2x.png')}
                iconStyle={{width: 13,height:16, marginTop: 1}}
                title=' 福州 鼓楼'
                onPress={() => {

                }}
            />
        );
    }

    componentWillMount() {
        // this.refs.listView.startHeaderRefreshing();
    }

    render() {
        let titles = ['享美食', '住酒店', '爱玩乐', '全部']
        let types = [
            ['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜'],
            ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠', '成人情趣'],
            ['热门', 'KTV', '足疗按摩', '洗浴汗蒸', '大宝剑', '电影院', '美发', '美甲'],
            []
        ]

        let storyListViews = [];
        for (let i = 0; i < titles.length; i++) {
            let storyListView = <NearbyListScene tabLabel={titles[i]} key={i} types={types[i]}/>
            storyListViews.push(storyListView)
        }

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
                {storyListViews}
            </ScrollableTabView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:color.background
    },
    searchBar: {
        width: screen.width * 0.65,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        alignSelf: 'flex-end',
        marginTop: system.isIOS ? 25 : 13,
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
});

//make this component available to the app
export default NearbyScene;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import SpacingView from '../../ui/SpacingView'
import RefreshListView, { RefreshState } from '../../ui/RefreshListView'
import { Heading1, Heading2, Paragraph } from '../../ui/Text'
import color from '../../ui/color'
import NavigationItem from '../../ui/NavigationItem'
import SearchBar from '../../ui/SearchBar'
import Button from '../../ui/Button'

import screen from '../../common/screen'
import api from '../../api'
import MerchantListScene from './MerchantListScene'

// create a component
class MerchantScene extends Component {
    
    constructor(props) {
        super(props)

    }

    componentWillMount() {

        let titleView = (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../img/Home/search_icon.png')} style={styles.searchIcon} />
                <Paragraph>找附近的吃喝玩乐</Paragraph>
            </TouchableOpacity>
        )

        let leftButton = (
            <NavigationItem
                icon={require('../../img/Merchant/icon_food_merchant_address@2x@2x.png')}
                iconStyle={{width: 13,height:16, marginTop: 7}}
                title=' 福州 鼓楼'
                onPress={() => {

                }}
            />
        )
        Actions.refresh({
            renderTitle: () => titleView,
            renderLeftButton: () => leftButton
        })

        // this.refs.listView.startHeaderRefreshing();
    }

    render() {
        let titles = ['享美食', '住酒店', '爱玩乐', '全部']
        let storyListViews = [];
        for (let i = 0; i < titles.length; i++) {
            let storyListView = <MerchantListScene tabLabel={titles[i]} key={i} />
            storyListViews.push(storyListView)
        }

        return (
            <ScrollableTabView
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
        marginTop: 25,
        marginRight: 20,
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    },
    tabBarText: {
        fontSize: 17,
        marginTop: 13,
    },
    tabBarUnderline: {
        backgroundColor: '#FE566D'
    },
});

//make this component available to the app
export default MerchantScene;

/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan 
 * @flow
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SpacingView from '../../widget/SpacingView'
import RefreshListView, { RefreshState } from '../../widget/RefreshListView'
import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import color from '../../widget/color'
import NavigationItem from '../../widget/NavigationItem'
import SearchBar from '../../widget/SearchBar'
import Button from '../../widget/Button'

import screen from '../../common/screen'
import system from '../../common/system'
import api from '../../api'


import HomeMenuView from './HomeMenuView'
import HomeGridView from './HomeGridView'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'

// create a component
class HomeScene extends Component {
    static renderRightButton = () => {
        return (
            <NavigationItem
                icon={require('../../img/Home/icon_navigationItem_message_white@2x.png')}
                onPress={() => {

                }}
            />
        );
    }
    static renderTitle = () => {
        return (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../img/Home/search_icon.png')} style={styles.searchIcon} />
                <Paragraph>一点点</Paragraph>
            </TouchableOpacity>
        );
    }
    static renderLeftButton = () => {
        return (
            <NavigationItem
                title='福州'
                titleStyle={{ color: 'white' }}
                onPress={() => {

                }}
            />
        );
    }

    state: {
        discounts: Array<Object>,
        dataSource: ListView.DataSource
    }

    constructor(props: Object) {
        super(props)

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
            discounts: [],
            dataSource: ds.cloneWithRows([]),
        }
    }

    componentDidMount() {
        this.refs.listView.startHeaderRefreshing();
    }

    requestData() {
        this.requestDiscount()
        this.requestRecommend()
    }

    render() {
        return (
            <View style={styles.container}>
                <RefreshListView
                    ref='listView'
                    dataSource={this.state.dataSource}
                    renderHeader={() => this.renderHeader()}
                    renderRow={(rowData) =>
                        <GroupPurchaseCell
                            info={rowData}
                            onPress={() => {
                                StatusBar.setBarStyle('default', false)
                                Actions.groupPurchase({ info: rowData })
                            }}
                        />
                    }
                    onHeaderRefresh={() => this.requestData()}
                />
            </View>
        );
    }

    renderHeader() {
        return (
            <View>
                <HomeMenuView menuInfos={this.loadMenuInfos()} onMenuSelected={(index) => this.onMenuSelected(index)} />

                <SpacingView />

                <HomeGridView infos={this.state.discounts} onGridSelected={(index) => this.onGridSelected(index)} />

                <SpacingView />

                <View style={styles.recommendHeader}>
                    <Heading2>猜你喜欢</Heading2>
                </View>
            </View>
        )
    }

    onGridSelected(index: number) {
        let discount = this.state.discounts[index]

        if (discount.type == 1) {
            StatusBar.setBarStyle('default', false)

            let location = discount.tplurl.indexOf('http')
            let url = discount.tplurl.slice(location)
            Actions.web({ url: url })
        }
    }

    requestRecommend() {
        fetch(api.recommend)
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json));

                let dataList = json.data.map((info) => {
                    return {
                        id: info.id,
                        imageUrl: info.squareimgurl,
                        title: info.mname,
                        subtitle: `[${info.range}]${info.title}`,
                        price: info.price
                    }
                })

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataList)
                })
                setTimeout(() => {
                    this.refs.listView.endRefreshing(RefreshState.NoMoreData)
                }, 500);
            })
            .catch((error) => {
                this.refs.listView.endRefreshing(RefreshState.Failure)
            })
    }

    requestDiscount() {
        fetch(api.discount)
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json));
                this.setState({ discounts: json.data })
            })
            .catch((error) => {
                alert(error)
            })
    }

    onMenuSelected(index: number) {
        alert(index)
    }


    loadMenuInfos() {
        return api.menuInfo
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    recommendHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    searchBar: {
        width: screen.width * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: system.isIOS ? 25 : 13,
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }
});

//make this component available to the app
export default HomeScene;

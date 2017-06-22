/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, ListView, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'

import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { screen, system, tool } from '../../common'
import api from '../../api'
import { color, DetailCell, RefreshListView, RefreshState, SpacingView } from '../../widget'

import OrderMenuItem from './OrderMenuItem'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'

// create a component
class OrderScene extends PureComponent {

    listView: ListView

    state: {
        dataSource: ListView.DataSource
    }

    static navigationOptions = ({ navigation }) => ({
        title: '订单',
        headerStyle: { backgroundColor: 'white' },
    })

    constructor(props: Object) {
        super(props)

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
            dataSource: ds.cloneWithRows([]),
        }
    }

    componentDidMount() {
        this.listView.startHeaderRefreshing();
    }

    async requestData() {
        try {
            let response = await fetch(api.recommend)
            let json = await response.json()

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

            // 偷懒，用同一个测试接口获取数据，然后打乱数组，造成数据来自不同接口的假象 >.<
            dataList.sort(() => { return 0.5 - Math.random() })

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(dataList)
            })
            setTimeout(() => {
                this.listView.endRefreshing(RefreshState.NoMoreData)
            }, 500)
        } catch (error) {
            this.listView.endRefreshing(RefreshState.Failure)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <RefreshListView
                    ref={(e) => this.listView = e}
                    dataSource={this.state.dataSource}
                    renderHeader={() => this.renderHeader()}
                    renderRow={(rowData) =>
                        <GroupPurchaseCell
                            info={rowData}
                            onPress={() => {
                                StatusBar.setBarStyle('default', false)
                                this.props.navigation.navigate('GroupPurchase', { info: rowData })
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
            <View style={styles.container}>
                <DetailCell title='我的订单' subtitle='全部订单' style={{ height: 38 }} />

                <View style={styles.itemContainer}>
                    <OrderMenuItem title='待付款' icon={require('../../img/Order/order_tab_need_pay@2x.png')} />
                    <OrderMenuItem title='待使用' icon={require('../../img/Order/order_tab_need_use@2x.png')} />
                    <OrderMenuItem title='待评价' icon={require('../../img/Order/order_tab_need_review@2x.png')} />
                    <OrderMenuItem title='退款/售后' icon={require('../../img/Order/order_tab_needoffer_aftersale@2x.png')} />
                </View>

                <SpacingView />

                <DetailCell title='我的收藏' subtitle='查看全部' style={{ height: 38 }} />
            </View>
        )
    }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemContainer: {
        flexDirection: 'row',
    },
});

//make this component available to the app
export default OrderScene;

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

import RefreshListView, { RefreshState } from '../../widget/RefreshListView'
import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import color from '../../widget/color'
import NavigationItem from '../../widget/NavigationItem'
import SearchBar from '../../widget/SearchBar'
import Button from '../../widget/Button'

import screen from '../../common/screen'
import api from '../../api'

import NearbyCell from './NearbyCell'
import NearbyHeaderView from './NearbyHeaderView'


// create a component
class NearbyListScene extends Component {

    state: {
        dataSource: ListView.DataSource,
        typeIndex: number
    }

    constructor(props: Object) {
        super(props)

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
            dataSource: ds.cloneWithRows([]),
            typeIndex: 0,
        }
    }

    componentDidMount() {
        this.refs.listView.startHeaderRefreshing();
    }

    requestData() {
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

                // 偷懒，用同一个测试接口获取数据，然后打乱数组，造成数据来自不同接口的假象 >.<
                dataList.sort(() => { return 0.5 - Math.random() })

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

    render() {
        return (
            <RefreshListView
                ref='listView'
                dataSource={this.state.dataSource}
                renderHeader={() =>
                    <NearbyHeaderView
                        titles={this.props.types}
                        selectedIndex={this.state.typeIndex}
                        onSelected={(index) => {
                            if (index != this.state.typeIndex) {
                                this.setState({ typeIndex: index })
                                this.refs.listView.startHeaderRefreshing()
                            }
                        }}
                    />
                }
                renderRow={(rowData) =>
                    <NearbyCell
                        info={rowData}
                        onPress={() => {
                            Actions.groupPurchase({ info: rowData })
                        }}
                    />
                }
                onHeaderRefresh={() => this.requestData()}
            />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default NearbyListScene;

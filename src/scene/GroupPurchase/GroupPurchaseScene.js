/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, InteractionManager } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SpacingView from '../../widget/SpacingView'
import RefreshListView, { RefreshState } from '../../widget/RefreshListView'
import { Heading1, Heading2, Paragraph, HeadingBig } from '../../widget/Text'
import color from '../../widget/color'
import Separator from '../../widget/Separator'
import screen from '../../common/screen'
import api, { recommendUrlWithId, groupPurchaseDetailWithId } from '../../api'
import Button from '../../widget/Button'
import GroupPurchaseCell from './GroupPurchaseCell'
import NavigationItem from '../../widget/NavigationItem'

// create a component
class GroupPurchaseScene extends Component {

    state: {
        info:Object,
        dataSource: ListView.DataSource
    }
    
    constructor(props: Object) {
        super(props);

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
            info: {},
            dataSource: ds.cloneWithRows([]),
        }
    }

    componentDidMount() {

        let rightButton = (
            <NavigationItem
                icon={require('../../img/Public/icon_navigationItem_share@2x.png')}
                onPress={() => {

                }}
            />
        )

        Actions.refresh({
            renderRightButton: () => rightButton,
        })

        InteractionManager.runAfterInteractions(() => {
            this.refs.listView.startHeaderRefreshing();
        });
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
                            onPress={() => Actions.groupPurchase({ info: rowData })}
                        />
                    }
                    onHeaderRefresh={() => this.requestData()}
                />
            </View>
        )
    }

    renderHeader() {
        let info = this.props.info

        return (
            <View>
                <View>
                    <Image style={styles.banner} source={{ uri: info.imageUrl.replace('w.h', '480.0') }} />

                    <View style={styles.topContainer}>
                        <Heading1 style={{ color: color.theme }}>￥</Heading1>
                        <HeadingBig style={{ marginBottom: -8 }}>{info.price}</HeadingBig>
                        <Paragraph style={{ marginLeft: 10 }}>门市价：￥{(info.price * 1.1).toFixed(0)}</Paragraph>
                        <View style={{ flex: 1 }} />
                        <Button title='立即抢购' style={{ color: 'white', fontSize: 18 }} containerStyle={styles.buyButton}
                        />
                    </View>
                </View>

                <Separator />

                <View>
                    <View style={styles.tagContainer}>
                        <Image style={{ width: 20, height: 20 }} source={require('../../img/Home/icon_deal_anytime_refund.png')} />
                        <Paragraph style={{ color: '#89B24F' }}>  随时退</Paragraph>
                        <View style={{ flex: 1 }} />
                        <Paragraph>已售{1234}</Paragraph>
                    </View>

                </View>

                <SpacingView />

                <View style={styles.tipHeader}>
                    <Heading2>看了本团购的用户还看了</Heading2>
                </View>
            </View>
        )
    }

    requestData() {
        this.requestDetail()
        this.requestRecommend()
    }

    requestDetail() {
        //原详情接口已经被美团关掉，这里暂时从上一级列表中获取详情数据
    }

    requestRecommend() {
        fetch(recommendUrlWithId(this.props.info.id))
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json));

                let dataList = json.data.deals.map((info) => {
                    return {
                        id: info.id,
                        imageUrl: info.imgurl,
                        title: info.brandname,
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


}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    banner: {
        width: screen.width,
        height: screen.width * 0.5
    },
    topContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    buyButton: {
        backgroundColor: '#fc9e28',
        width: 94,
        height: 36,
        borderRadius: 7,
    },
    tagContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    tipHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    }
});

//make this component available to the app
export default GroupPurchaseScene;

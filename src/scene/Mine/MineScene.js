/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';

import RefreshListView, { RefreshState } from '../../widget/RefreshListView'
import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import screen from '../../common/screen'
import color from '../../widget/color'
import SpacingView from '../../widget/SpacingView'

import DetailCell from '../../widget/DetailCell'

// create a component
class MineScene extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isRefreshing: false
        }
    }

    onHeaderRefresh() {
        this.setState({ isRefreshing: true })

        setTimeout(() => {
            this.setState({ isRefreshing: false })
        }, 2000);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: color.background }}>
                <View style={{ position: 'absolute', width: screen.width, height: screen.height / 2, backgroundColor: color.theme }} />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray'
                        />
                    }>
                    <View style={styles.header}>
                        <View style={styles.topContainer}>
                            <TouchableOpacity>
                                <Image style={[styles.icon, { marginRight: 15 }]} source={require('../../img/Mine/icon_navigationItem_set_white@2x.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={[styles.icon, { marginRight: 10 }]} source={require('../../img/Mine/icon_navigationItem_message_white@2x.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.userContainer}>
                            <Image style={styles.avatar} source={require('../../img/Mine/avatar@2x.png')} />

                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Heading1 style={{ color: 'white' }}>素敌</Heading1>
                                    <Image style={{ marginLeft: 4 }} source={require('../../img/Mine/beauty_technician_v15@2x.png')} />

                                </View>
                                <Paragraph style={{ color: 'white', marginTop: 4 }}>个人信息 ></Paragraph>
                            </View>

                        </View>
                    </View>

                    <SpacingView />

                    <View style={{ flex: 1 }}>
                        <DetailCell
                            image={require('../../img/Mine/icon_mine_wallet@2x.png')}
                            title='我的钱包'
                            subtitle='办信用卡' />
                        <DetailCell
                            image={require('../../img/Mine/icon_mine_balance@2x.png')}
                            title='余额'
                            subtitle='￥95872385' />
                        <DetailCell
                            image={require('../../img/Mine/icon_mine_voucher@2x.png')}
                            title='抵用券'
                            subtitle='63' />
                        <DetailCell
                            image={require('../../img/Mine/icon_mine_membercard@2x.png')}
                            title='会员卡'
                            subtitle='2' />

                        <SpacingView />

                        <DetailCell
                            image={require('../../img/Mine/icon_mine_friends@2x.png')}
                            title='好友去哪' />
                        <DetailCell
                            image={require('../../img/Mine/icon_mine_comment@2x.png')}
                            title='我的评价' />
                        <DetailCell
                            image={require('../../img/Mine/icon_mine_collection@2x.png')}
                            title='我的收藏' />
                        <DetailCell
                            image={require('../../img/Mine/icon_mine_membercenter@2x.png')}
                            title='会员中心'
                            subtitle='v15' />
                        <DetailCell
                            image={require('../../img/Mine/icon_mine_member@2x.png')}
                            title='积分商城'
                            subtitle='好礼已上线' />

                        <SpacingView />

                        <DetailCell
                            image={require('../../img/Mine/icon_mine_customerService@2x.png')}
                            title='客服中心' />
                        <DetailCell
                            image={require('../../img/Mine/icon_mine_aboutmeituan@2x.png')}
                            title='关于美团'
                            subtitle='我要合作' />

                        <SpacingView />

                    </View>


                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {

    },
    header: {
        backgroundColor: color.theme,
        paddingBottom: 20
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 7,
    },
    icon: {
        width: 27,
        height: 27,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6'
    }
});

//make this component available to the app
export default MineScene;

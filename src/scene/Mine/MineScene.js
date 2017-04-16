//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity ,ScrollView} from 'react-native';

import RefreshListView, { RefreshState } from '../../ui/RefreshListView'
import { Heading1, Heading2, Paragraph } from '../../ui/Text'
import screen from '../../common/screen'
import color from '../../ui/color'
import SpacingView from '../../ui/SpacingView'

import MineCell from './MineCell'

// create a component
class MineScene extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
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
                        <Image style={styles.avatar} source={require('../../img/Mine/icon_mine_default_portrait@2x.png')} />

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
                    <MineCell title='我的钱包' subtitle='办信用卡' />
                    <MineCell title='余额' subtitle='￥95872385' />
                    <MineCell title='抵用券' subtitle='63' />
                    <MineCell title='会员卡' subtitle='2' />

                    <SpacingView />

                    <MineCell title='好友去哪' />
                    <MineCell title='我的评价' />
                    <MineCell title='我的收藏' />
                    <MineCell title='会员中心' subtitle='v15' />
                    <MineCell title='积分商城' subtitle='好礼已上线' />

                    <SpacingView />

                    <MineCell title='客服中心' />
                    <MineCell title='关于美团' subtitle='我要合作' />
                </View>


            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
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
    }
});

//make this component available to the app
export default MineScene;

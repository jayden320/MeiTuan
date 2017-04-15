//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';

import RefreshListView, { RefreshState } from '../../ui/RefreshListView'
import { Heading1, Heading2, Paragraph } from '../../ui/Text'
import screen from '../../common/screen'
import color from '../../ui/color'
import SpacingView from '../../ui/SpacingView'

// create a component
class MineScene extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginBottom: 20 }}>
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

                <View style={{ flex: 1, backgroundColor: 'white', }}>

                </View>


            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.backgroundColor,
    },
    header: {

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

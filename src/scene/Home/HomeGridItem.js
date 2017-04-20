/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Heading1, Heading2 } from '../../widget/Text'
import screen from '../../common/screen'
import color from '../../widget/color'

// create a component
class HomeGridItem extends Component {
    render() {
        let info = this.props.info

        let title = info.maintitle
        let color = info.typeface_color
        let subtitle = info.deputytitle
        let imageUrl = info.imageurl.replace('w.h', '120.0')

        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <View>
                    <Heading1 style={{ color: color, marginBottom: 10}}>{title}</Heading1>
                    <Heading2 >{subtitle}</Heading2>
                </View>

                <Image style={styles.icon} source={{ uri: imageUrl }} />
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 2 - 1,
        height: screen.width / 4,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: color.border
    },
    icon: {
        width: screen.width / 5,
        height: screen.width / 5,
    }
});

//make this component available to the app
export default HomeGridItem;

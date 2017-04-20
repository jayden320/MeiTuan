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

// create a component
class NavigationItem extends Component {
    render() {
        let icon = this.props.icon &&
            <Image style={[styles.icon, this.props.iconStyle]} source={this.props.icon} />

        let title = this.props.title &&
            <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                {icon}
                {title}
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
        height: 40,
    },
    icon: {
        width: 27,
        height: 27,
        marginBottom: 18,
    },
    title: {
        fontSize: 15,
        marginBottom: 15,
        color: '#333333'
    }
});

//make this component available to the app
export default NavigationItem;

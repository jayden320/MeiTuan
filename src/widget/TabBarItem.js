/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 4,
        fontSize: 12,
    },
    image: {
        marginTop: 4,
        width: 25,
        height: 25,
    }
});


class TabBarItem extends Component {

    static propTypes = {
        selected: React.PropTypes.bool,
        title: React.PropTypes.string,
    }

    static defaultProps = {
        selected: false,
    }

    render() {
        let titleStyle = this.props.selected ? this.props.tabBarSelectedTitleStyle : this.props.tabBarUnselectedTitleStyle;

        let imageStyle = this.props.selected ? this.props.tabBarSelectedImageStyle : this.props.tabBarUnselectedImageStyle;

        let image = this.props.image;
        if (this.props.selectedImage != null) {
            image = this.props.selected ? this.props.selectedImage : this.props.image;
        }

        return (
            <View style={styles.container}>
                <Image
                    style={[styles.image, imageStyle]}
                    source={image}
                />

                <Text style={[styles.title, titleStyle]}>
                    {this.props.title}
                </Text>

            </View>
        );
    }
}

export default TabBarItem;
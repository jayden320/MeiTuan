/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { screen, system, tool } from '../../common'
import { color } from '../../widget'

// create a component
class NearbyHeaderView extends Component {
    static defaultProps = {
        onSelected: () => { }
    }
    render() {
        let items = this.props.titles.map(
            (title, i) => (
                <TouchableOpacity
                    style={[{ backgroundColor: this.props.selectedIndex == i ? '#FE566D' : 'white' }, styles.item]}
                    key={i}
                    onPress={() => this.props.onSelected(i)}>
                    <Paragraph
                        style={{ color: this.props.selectedIndex == i ? 'white' : '#555555' }}>
                        {this.props.titles[i]}
                    </Paragraph>
                </TouchableOpacity>
            )
        )

        return (
            <View style={styles.container}>
                {items}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: screen.width / 4 - 10,
        marginLeft: 8,
        marginTop: 5,
        marginBottom: 5,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: screen.onePixel,
        borderColor: color.border,
    },
});

//make this component available to the app
export default NearbyHeaderView;

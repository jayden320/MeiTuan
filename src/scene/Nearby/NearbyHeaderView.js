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
import screen from '../../common/screen'
import color from '../../widget/color'

// create a component
class NearbyHeaderView extends Component {
    static defaultProps = {
        onSelected: () => { }
    }
    render() {
        let items = []



        for (let i = 0; i < this.props.titles.length; i++) {
            let item = (
                <TouchableOpacity style={[{ backgroundColor: this.props.selectedIndex == i ? '#FE566D' : 'white' }, styles.item]} key={i} onPress={() => this.props.onSelected(i)}>
                    <Paragraph style={{ color: this.props.selectedIndex == i ? 'white' : '#555555' }}>{this.props.titles[i]}</Paragraph>
                </TouchableOpacity>
            )
            items.push(item)
        }

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
        borderWidth: 1,
        borderColor: color.border,
    },
});

//make this component available to the app
export default NearbyHeaderView;

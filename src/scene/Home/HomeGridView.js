/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import color from '../../widget/color'
import HomeGridItem from './HomeGridItem'

// create a component
class HomeGridView extends Component {

    static defaultProps = {
        infos: []
    }

    render() {
        let { infos } = this.props
        let gridItems = []
        for (let i = 0; i < infos.length; i++) {
            let gridItem = (
                <HomeGridItem info={infos[i]} key={i} onPress={() => this.props.onGridSelected(i)}/>
            )
            gridItems.push(gridItem)
        }

        return (
            <View style={styles.container}>
                {gridItems}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: color.border
    },
});

//make this component available to the app
export default HomeGridView;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Heading1, Heading2, Paragraph } from '../../ui/Text'
import Separator from '../../ui/Separator'
import screen from '../../common/screen'

// create a component
class MineCell extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.content}>
                    <Heading2>{this.props.title}</Heading2>
                    <View style={{ flex: 1, backgroundColor: 'blue' }} />
                    <Paragraph style={{color: '#999999'}}>{this.props.subtitle}</Paragraph>
                    <Image style={styles.icon} source={require('../../img/Public/cell_arrow.png')} />
                </View>

                <Separator />
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 10,
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    icon: {
        width: 14,
        height: 14,
        marginLeft: 5,
    }
});

//make this component available to the app
export default MineCell;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import color from './color'

// create a component
class SpacingView extends Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 20,
        backgroundColor: color.background,
    },
});

//make this component available to the app
export default SpacingView;

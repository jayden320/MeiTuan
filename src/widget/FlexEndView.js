//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class FlexEndView extends Component {
    render() {
        return (
            <View  {...this.props} style={[styles.container, this.props.style]}>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    }
});

//make this component available to the app
export default FlexEndView;

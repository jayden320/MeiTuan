//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// create a component
class MerchantScene extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />  
                <Text>MerchantScene</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MerchantScene;

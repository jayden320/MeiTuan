//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';

import RefreshListView, { RefreshState } from '../../widget/RefreshListView'
import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import screen from '../../common/screen'
import color from '../../widget/color'
import SpacingView from '../../widget/SpacingView'

import DetailCell from '../../widget/DetailCell'
import OrderMenuItem from './OrderMenuItem'

// create a component
class OrderScene extends Component {
    render() {
        return (
            <View style={styles.container}>
                <DetailCell title='我的订单' subtitle='全部订单' style={{height: 38}}/>
            
                <View>
                
                </View>
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
export default OrderScene;

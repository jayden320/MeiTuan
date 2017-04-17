/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';

import system from '../common/system'

const dismissKeyboard = require('dismissKeyboard');


class SearchBar extends Component {

    static propTypes = {
        onSubmitEditing: React.PropTypes.func,

    }

    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text,

        };
    }

    onChangeText(text) {
        this.setState({
            text: text
        });

        if (this.props.onChangeText) {
            this.props.onChangeText();
        }
    }

    onSubmitEditing() {
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.text);
        }
    }

    click() {
        if (system.isIOS) {
            //取消

        } else {
            //搜索
            this.onSubmitEditing();
        }
        dismissKeyboard();
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={styles.inputContainer}>
                    <Image
                        style={styles.icon}
                        source={require('../img/Home/search_icon.png')}
                    />

                    <TextInput
                        ref='input'
                        style={styles.input}
                        placeholder='搜索'
                        returnKeyType='search'
                        onSubmitEditing={this.onSubmitEditing.bind(this)}
                        onChangeText={(text) => { this.onChangeText(text) }}
                        underlineColorAndroid='transparent'
                    />

                </View>

                <TouchableOpacity
                    onPress={this.click.bind(this)}
                    style={styles.cancelBtn}>
                    <Text style={styles.cancelText}>
                        {system.isIOS ? '取消' : '搜索'}
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 32,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 7,
    },
    inputContainer: {
        flex: 1,
        height: 32,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e4e4e4',
        borderRadius: 5,
    },
    icon: {
        marginLeft: 10,
        width: 21,
        height: 21,
    },
    cancelBtn: {
        width: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelText: {
        color: '#4683ca',
        fontSize: 14,
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
    }
});


export default SearchBar;	
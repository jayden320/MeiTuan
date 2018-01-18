/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */


import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {View, Text, StyleSheet, TouchableOpacity, ViewPropTypes} from 'react-native'

type Props = {
    onPress: Function,
    disabled: boolean,
    style: ViewPropTypes.style,

    title: string,
    titleStyle: ViewPropTypes.style,
    activeOpacity: number
}

class Button extends PureComponent<Props> {

    static defaultProps = {
        onPress: () => {},
        disabled: false,
        activeOpacity: 0.8
    }

    render() {
        let {onPress, disabled, style, titleStyle, title, activeOpacity} = this.props
        return (
            <TouchableOpacity
                style={[styles.container, style]}
                onPress={onPress}
                disabled={disabled}
                activeOpacity={activeOpacity}
            >
                <Text style={titleStyle}>
                    {title}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default Button
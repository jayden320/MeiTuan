/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */


import React, {PureComponent} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import color from './color'
import {screen, system} from '../common'

type Props = {
    style?: any,
}

class Separator extends PureComponent<Props> {
    render() {
        return (
            <View style={[styles.line, this.props.style]} />
        )
    }
}


const styles = StyleSheet.create({
    line: {
        width: screen.width,
        height: screen.onePixel,
        backgroundColor: color.border,
    },
})


export default Separator

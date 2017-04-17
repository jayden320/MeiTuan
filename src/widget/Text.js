/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 */

import React from 'react';
import ReactNative, { StyleSheet, Dimensions, Text } from 'react-native';

import color from './color'

export function HeadingBig({ style, ...props }) {
    return <Text style={[styles.h0, style]} {...props} />
}


export function Heading1({ style, ...props }) {
    return <Text style={[styles.h1, style]} {...props} />
}

export function Heading2({ style, ...props }) {
    return <Text style={[styles.h2, style]} {...props} />
}

export function Paragraph({ style, ...props }) {
    return <Text style={[styles.p, style]} {...props} />
}

export function Tip({ style, ...props }) {
    return <Text style={[styles.tip, style]} {...props} />
}



const styles = StyleSheet.create({
    h0: {
        fontSize: 40,
        color: color.theme,
    },
    h1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    h2: {
        fontSize: 14,
        color: '#222222',
    },
    p: {
        fontSize: 13,
        color: '#777777',
    },
    tip: {
        fontSize: 13,
        color: '#999999'
    }
});

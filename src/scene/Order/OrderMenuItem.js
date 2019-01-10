/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */


import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { Heading3 } from '../../widget/Text'
import { screen, system } from '../../common'

type Props = {
  icon: any,
  title: string,
  onPress?: Function,
}

class OrderMenuItem extends PureComponent<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.container}
        onPress={this.props.onPress}>
        <Image source={this.props.icon} resizeMode='contain' style={styles.icon} />
        <Heading3>
          {this.props.title}
        </Heading3>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screen.width / 4,
    height: screen.width / 5,
  },
  icon: {
    width: 30,
    height: 30,
    margin: 5,
  }
})


export default OrderMenuItem

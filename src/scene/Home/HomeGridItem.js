/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */


import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Heading2, Heading3 } from '../../widget/Text'
import { screen, system } from '../../common'
import { color } from '../../widget'

type Props = {
  info: Object,
  onPress: Function,
}


class HomeGridItem extends PureComponent<Props> {

  render() {
    let info = this.props.info

    let title = info.maintitle
    let color = info.typeface_color
    let subtitle = info.deputytitle
    let imageUrl = info.imageurl.replace('w.h', '120.0')

    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View>
          <Heading2 style={{ color: color, marginBottom: 10 }}>{title}</Heading2>
          <Heading3 >{subtitle}</Heading3>
        </View>

        <Image style={styles.icon} source={{ uri: imageUrl }} />
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: screen.width / 2 - screen.onePixel,
    height: screen.width / 4,
    backgroundColor: 'white',
    borderBottomWidth: screen.onePixel,
    borderRightWidth: screen.onePixel,
    borderColor: color.border
  },
  icon: {
    width: screen.width / 5,
    height: screen.width / 5,
  }
})


export default HomeGridItem

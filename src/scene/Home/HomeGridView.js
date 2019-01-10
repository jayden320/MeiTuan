/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */


import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { color } from '../../widget'
import { screen, system } from '../../common'
import HomeGridItem from './HomeGridItem'

type Props = {
  infos: Array<Object>,
  onGridSelected: Function,
}


class HomeGridView extends PureComponent<Props> {

  static defaultProps = {
    infos: []
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.infos.map((info, index) => (
          <HomeGridItem
            info={info}
            key={index}
            onPress={() => this.props.onGridSelected(index)}
          />
        ))}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    borderTopWidth: screen.onePixel,
    borderLeftWidth: screen.onePixel,
    borderColor: color.border
  },
})


export default HomeGridView

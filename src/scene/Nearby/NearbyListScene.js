/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan 
 * @flow
 */


import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar } from 'react-native'
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import { color, Button, NavigationItem } from '../../widget'
import { Heading2, Heading3, Paragraph } from '../../widget/Text'
import { screen, system } from '../../common'
import api from '../../api'

import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'
import NearbyHeaderView from './NearbyHeaderView'

type Props = {
  types: Array<string>,
  navigation: any,
}

type State = {
  typeIndex: number,
  data: Array<Object>,
  refreshState: number,
}


class NearbyListScene extends PureComponent<Props, State> {

  constructor(props: Object) {
    super(props)

    this.state = {
      typeIndex: 0,
      data: [],
      refreshState: RefreshState.Idle,
    }
  }

  componentDidMount() {
    this.requestFirstPage()
  }

  requestData = async () => {
    let response = await fetch(api.recommend)
    let json = await response.json()

    console.log(JSON.stringify(json))

    let dataList = json.data.map((info) => {
      return {
        id: info.id,
        imageUrl: info.squareimgurl,
        title: info.mname,
        subtitle: `[${info.range}]${info.title}`,
        price: info.price
      }
    })

    // 偷懒，用同一个测试接口获取数据，然后打乱数组，造成数据来自不同接口的假象 >.<
    dataList.sort(() => { return 0.5 - Math.random() })

    return dataList
  }

  requestFirstPage = async () => {
    try {
      this.setState({ refreshState: RefreshState.HeaderRefreshing })
      let dataList = await this.requestData()

      this.setState({
        data: dataList,
        refreshState: RefreshState.Idle,
      })
    } catch (error) {
      this.setState({
        refreshState: RefreshState.Failure,
      })
    }
  }

  requestNextPage = async () => {
    try {
      this.setState({ refreshState: RefreshState.FooterRefreshing })
      let dataList = await this.requestData()

      this.setState({
        data: [...this.state.data, ...dataList],
        refreshState: this.state.data.length > 30 ? RefreshState.NoMoreData : RefreshState.Idle,
      })
    } catch (error) {
      this.setState({
        refreshState: RefreshState.Failure,
      })
    }
  }

  renderHeader = () => {
    return (
      <NearbyHeaderView
        titles={this.props.types}
        selectedIndex={this.state.typeIndex}
        onSelected={(index) => {
          if (index != this.state.typeIndex) {
            this.setState({ typeIndex: index })
            this.requestData()
          }
        }}
      />
    )
  }

  renderCell = (rowData: any) => {
    return (
      <GroupPurchaseCell
        info={rowData.item}
        onPress={() => {
          this.props.navigation.navigate('GroupPurchase', { info: rowData.item })
        }}
      />
    )
  }

  render() {
    return (
      <RefreshListView
        data={this.state.data}
        ListHeaderComponent={this.renderHeader}
        renderItem={this.renderCell}
        keyExtractor={(item, index) => index.toString()}
        refreshState={this.state.refreshState}
        onHeaderRefresh={this.requestFirstPage}
        onFooterRefresh={this.requestNextPage}
      />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


export default NearbyListScene

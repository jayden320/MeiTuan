/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */


import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, ListView, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'

import { Heading2, Heading3, Paragraph } from '../../widget/Text'
import { screen, system } from '../../common'
import api from '../../api'
import { color, DetailCell, SpacingView } from '../../widget'

import OrderMenuItem from './OrderMenuItem'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'

type Props = {
  navigation: any,
}

type State = {
  data: Array<Object>,
  refreshState: number,
}


class OrderScene extends PureComponent<Props, State> {

  static navigationOptions = ({ navigation }: any) => ({
    title: '订单',
    headerStyle: { backgroundColor: 'white' },
  })

  constructor(props: Props) {
    super(props)

    this.state = {
      data: [],
      refreshState: RefreshState.Idle,
    }
  }

  componentDidMount() {
    this.requestData()
  }

  requestData = async () => {
    try {
      this.setState({ refreshState: RefreshState.HeaderRefreshing })

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

      this.setState({
        data: dataList,
        refreshState: RefreshState.NoMoreData,
      })
    } catch (error) {
      this.setState({
        refreshState: RefreshState.Failure,
      })
    }
  }

  keyExtractor = (item: Object, index: number) => {
    return item.id.toString()
  }

  renderHeader = () => {
    return (
      <View style={styles.container}>
        <DetailCell title='我的订单' subtitle='全部订单' style={{ height: 38 }} />

        <View style={styles.itemContainer}>
          <OrderMenuItem title='待付款' icon={require('../../img/order/order_tab_need_pay.png')} />
          <OrderMenuItem title='待使用' icon={require('../../img/order/order_tab_need_use.png')} />
          <OrderMenuItem title='待评价' icon={require('../../img/order/order_tab_need_review.png')} />
          <OrderMenuItem title='退款/售后' icon={require('../../img/order/order_tab_needoffer_aftersale.png')} />
        </View>

        <SpacingView />

        <DetailCell title='我的收藏' subtitle='查看全部' style={{ height: 38 }} />
      </View>
    )
  }

  renderCell = (rowData: any) => {
    return (
      <GroupPurchaseCell
        info={rowData.item}
        onPress={() => {
          StatusBar.setBarStyle('default', false)
          this.props.navigation.navigate('GroupPurchase', { info: rowData.item })
        }}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <RefreshListView
          data={this.state.data}
          ListHeaderComponent={this.renderHeader}
          renderItem={this.renderCell}
          keyExtractor={this.keyExtractor}
          refreshState={this.state.refreshState}
          onHeaderRefresh={this.requestData}
        />
      </View>
    )
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
  },
})


export default OrderScene

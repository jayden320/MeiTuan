//
//  Created by Liu Jinyong on 17/4/5.
//  Copyright © 2016年 Liu Jinyong. All rights reserved.
//
//  Github:
//  https://github.com/huanxsd/react-native-refresh-list-view

//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, RefreshControl, ListView, ActivityIndicator, TouchableOpacity } from 'react-native'
import RefreshState from './RefreshState'

// create a component
class RefreshListView extends PureComponent {
    static propTypes = {
        onHeaderRefresh: React.PropTypes.func,
        onFooterRefresh: React.PropTypes.func,
    }

    static defaultProps = {
        footerRefreshingText: '数据加载中……',
        footerFailureText: '点击重新加载',
        footerNoMoreDataText: '已加载全部数据'
    }

    constructor(props: Object) {
        super(props)

        this.state = {
            headerState: RefreshState.Idle,
            footerState: RefreshState.Idle,
        }
    }

    startHeaderRefreshing() {
        this.setState({ headerState: RefreshState.Refreshing })

        this.props.onHeaderRefresh && this.props.onHeaderRefresh()
    }

    startFooterRefreshing() {
        this.setState({ footerState: RefreshState.Refreshing })

        this.props.onFooterRefresh && this.props.onFooterRefresh()
    }

    shouldStartHeaderRefreshing() {
        if (this.state.headerState == RefreshState.Refreshing ||
            this.state.footerState == RefreshState.Refreshing) {
            return false
        }

        return true
    }

    shouldStartFooterRefreshing() {
        if (this.state.headerState == RefreshState.Refreshing ||
            this.state.footerState == RefreshState.Refreshing) {
            return false
        }
        if (this.state.footerState == RefreshState.Failure ||
            this.state.footerState == RefreshState.NoMoreData) {
            return false
        }
        if (this.props.dataSource.getRowCount() == 0) {
            return false
        }

        return true
    }

    endRefreshing(refreshState: RefreshState) {
        if (refreshState == RefreshState.Refreshing) {
            return
        }
        let footerState = refreshState
        if (this.props.dataSource.getRowCount() == 0) {
            footerState = RefreshState.Idle
        }

        this.setState({
            headerState: RefreshState.Idle,
            footerState: footerState
        })
    }

    headerState() {
        return self.state.headerState
    }

    footerState() {
        return self.state.footerState
    }

    onHeaderRefresh() {
        if (this.shouldStartHeaderRefreshing()) {
            this.startHeaderRefreshing();
        }
    }

    onFooterRefresh() {
        if (this.shouldStartFooterRefreshing()) {
            this.startFooterRefreshing();
        }
    }

    render() {
        return (
            <ListView
                {...this.props}
                enableEmptySections
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.headerState == RefreshState.Refreshing}
                        onRefresh={() => this.onHeaderRefresh()}
                        tintColor='gray'
                    />
                }
                renderFooter={() => this.renderFooter()}
                onEndReachedThreshold={10}
                onEndReached={() => this.onFooterRefresh()}
            />
        );
    }


    renderFooter() {
        let footer = null;

        switch (this.state.footerState) {
            case RefreshState.Idle:
                break;
            case RefreshState.Failure: {
                footer =
                    <TouchableOpacity style={styles.footerContainer}
                        onPress={() => this.startFooterRefreshing()}
                    >
                        <Text style={styles.footerText}>
                            {this.props.footerFailureText}
                        </Text>
                    </TouchableOpacity>
                break;
            }
            case RefreshState.Refreshing: {
                footer =
                    <View style={styles.footerContainer} >
                        <ActivityIndicator size="small" color="#888888" />
                        <Text style={styles.footerText}>
                            {this.props.footerRefreshingText}
                        </Text>
                    </View>
                break;
            }
            case RefreshState.NoMoreData: {
                footer =
                    <View style={styles.footerContainer} >
                        <Text style={styles.footerText}>
                            {this.props.footerNoMoreDataText}
                        </Text>
                    </View>
                break;
            }
        }

        return footer;
    }

}

// define your styles
const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    footerText: {
        fontSize: 14,
        color: '#555555'
    }
});

//make this component available to the app
export default RefreshListView;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SeparatorView from '../../ui/SeparatorView'
import RefreshListView, { RefreshState } from '../../ui/RefreshListView'
import { Heading1, Heading2 } from '../../ui/Text'
import color from '../../ui/color'
import api from '../../api'

import HomeMenuView from './HomeMenuView'
import HomeGridView from './HomeGridView'
import RecommandCell from './RecommandCell'

// create a component
class HomeScene extends Component {
    constructor(props) {
        super(props)

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
            discounts: [],
            dataSource: ds.cloneWithRows([]),
        }
    }

    componentDidMount() {
        this.refs.listView.startHeaderRefreshing();
    }

    requestData() {
        this.requestDiscount()
        this.requestRecommand()
    }

    onSelectRow(rowData) {

    }

    render() {
        return (
            <View style={styles.container}>
                <RefreshListView
                    ref='listView'
                    dataSource={this.state.dataSource}
                    renderHeader={() => this.renderHeader()}
                    renderRow={(rowData) =>
                        <RecommandCell
                            info={rowData}
                            onPress={() => this.selectRow(rowData)}
                        />
                    }
                    onHeaderRefresh={() => this.requestData()}
                />
            </View>
        );
    }

    renderHeader() {
        return (
            <View>
                <HomeMenuView menuInfos={this.loadMenuInfos()} onMenuSelected={(index) => this.onMenuSelected(index)} />

                <SeparatorView />

                <HomeGridView infos={this.state.discounts} onGridSelected={(index) => this.onGridSelected(index)} />

                <SeparatorView />

                <View style={styles.recommandHeader}>
                    <Heading1>猜你喜欢</Heading1>
                </View>
            </View>
        )
    }

    onGridSelected(index) {
        let discount = this.state.discounts[index]

        if (discount.type == 1) {
            let location = discount.tplurl.indexOf('http')
            let url = discount.tplurl.slice(location)
            Actions.web({ url: url })
            // alert(url)
        }
        //    NSString *str = @"╭(╯^╰)╮";
        //     NSNumber *num = [[NSNumber alloc] initWithLong:1];
        //     if ([discount.type isEqualToValue: num]) {
        //         str = discount.tplurl;
        //         NSRange rang = [str rangeOfString:@"http"];
        //         str = [str substringFromIndex:rang.location];
        //         NSLog(@"%@",str);
        //     }

    }

    requestRecommand() {
        fetch(api.recommand)
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json));
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(json.data)
                })
                this.refs.listView.endRefreshing(RefreshState.NoMoreData)
            })
            .catch((error) => {
                this.refs.listView.endRefreshing(RefreshState.Failure)
            })
    }

    requestDiscount() {
        fetch(api.discount)
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json));
                this.setState({ discounts: json.data })
            })
            .catch((error) => {
                alert(error)
            })
    }

    onMenuSelected(index) {
        alert(index)
    }


    loadMenuInfos() {
        return [
            { title: '美食', icon: require('./img/icon_homepage_foodCategory.png') },
            { title: '电影', icon: require('./img/icon_homepage_movieCategory.png') },
            { title: '酒店', icon: require('./img/icon_homepage_hotelCategory.png') },
            { title: 'KTV', icon: require('./img/icon_homepage_KTVCategory.png') },
            { title: '优惠买单', icon: require('./img/icon_homepage_foodCategory.png') },
            { title: '周边游', icon: require('./img/icon_homepage_foodCategory.png') },
            { title: '预定早餐', icon: require('./img/icon_homepage_foodCategory.png') },

            { title: '美食1', icon: require('./img/icon_homepage_foodCategory.png') },
            { title: '电影1', icon: require('./img/icon_homepage_movieCategory.png') },
            { title: '酒店1', icon: require('./img/icon_homepage_hotelCategory.png') },
            { title: 'KTV1', icon: require('./img/icon_homepage_KTVCategory.png') },
            { title: '优惠买单1', icon: require('./img/icon_homepage_foodCategory.png') },
            { title: '周边游1', icon: require('./img/icon_homepage_foodCategory.png') },
            { title: '预定早餐1', icon: require('./img/icon_homepage_foodCategory.png') },

            { title: '美食2', icon: require('./img/icon_homepage_foodCategory.png') },
            { title: '电影2', icon: require('./img/icon_homepage_movieCategory.png') },
            { title: '酒店2', icon: require('./img/icon_homepage_hotelCategory.png') },
        ]
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    recommandHeader: {
        height: 30,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    }
});

//make this component available to the app
export default HomeScene;

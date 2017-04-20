/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan 
 * @flow
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';

import screen from '../../common/screen'
import PageControl from '../../widget/PageControl'
import color from '../../widget/color'
import HomeMenuItem from './HomeMenuItem'

// create a component
class HomeMenuView extends Component {

    state: {
        currentPage: number
    }

    constructor(props: Object) {
        super(props)

        this.state = {
            currentPage: 0
        }
    }

    render() {
        let menuItems = []
        let menuInfos = this.props.menuInfos
        for (let i = 0; i < menuInfos.length; i++) {
            let menuInfo = menuInfos[i]
            let menuItem = (
                <HomeMenuItem
                    key={menuInfo.title}
                    title={menuInfo.title}
                    icon={menuInfo.icon}
                    onPress={() => {
                        if (this.props.onMenuSelected) {
                            this.props.onMenuSelected(i)
                        }
                    }} />
            )

            menuItems.push(menuItem)
        }

        let menuViews = []
        let pageCount = Math.ceil(menuItems.length / 10)
        for (let i = 0; i < pageCount; i++) {
            let length = menuItems.length < (i * 10) ? menuItems.length - (i * 10) : 10
            let items = menuItems.slice(i * 10, i * 10 + length)

            let menuView = (
                <View style={styles.itemsView} key={i}>
                    {items}
                </View>
            )
            menuViews.push(menuView)
        }
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onScroll={(e) => this.onScroll(e)}
                >
                    <View style={styles.menuContainer}>
                        {menuViews}
                    </View>
                </ScrollView>


                <PageControl
                    style={styles.pageControl}
                    numberOfPages={pageCount}
                    currentPage={this.state.currentPage}
                    hidesForSinglePage={true}
                    pageIndicatorTintColor='gray'
                    currentPageIndicatorTintColor={color.theme}
                    indicatorSize={{ width: 8, height: 8 }}
                />
            </View>

        );
    }

    onScroll(e: any) {
        let x = e.nativeEvent.contentOffset.x;
        let currentPage = x / screen.width;

        if (this.state.currentPage != currentPage) {
            this.setState({
                currentPage: currentPage
            })
        }
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    contentContainer: {
    },
    menuContainer: {
        flexDirection: 'row',
    },
    itemsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: screen.width,
    },
    pageControl: {
        margin: 10,
    }
});

//make this component available to the app
export default HomeMenuView;

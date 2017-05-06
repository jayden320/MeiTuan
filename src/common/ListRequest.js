/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

import { urlByAppendingParams } from './tool'

const kFirstPage = 1
const kCurrentPageKey = 'page'
const kPageSizeKey = 'count'
const kPageSize = 20
const kDefaultListNode = 'list'
const host = ''

class ListRequest {
    requestNode: string
    isFirstLoad: boolean
    dataList: Array<Object>
    isReload: boolean
    currentPage: number
    noMoreData: boolean
    onSuccess: function
    onFailure: function

    constructor(requestNode: string) {
        this.requestNode = requestNode
        this.isFirstLoad = true
        this.dataList = []
        this.isReload = true
        this.currentPage = kFirstPage
        this.noMoreData = false
    }

    requestFirstPage(params: Object) {
        this.isReload = true
        this.startRequest(params, kFirstPage)
    }

    requestNextPage(params: Object) {
        this.isReload = false
        this.startRequest(params, this.currentPage + 1)
    }

    startRequest(params: Object, page: number) {
        let requestParams = { ...params }
        requestParams[kCurrentPageKey] = page
        requestParams[kPageSizeKey] = kPageSize

        let url = urlByAppendingParams(host + this.requestNode, requestParams);
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                if (this.isReload) {
                    this.dataList = json.items
                } else {
                    this.dataList.push(...json.items)
                }
                this.currentPage = page
                this.noMoreData = json.items.count < kPageSize

                this.onSuccess && this.onSuccess()
                
                console.log(`ListRequest - Success node:${this.requestNode}`);
            }).catch((error) => {
                if (this.onFailure) {
                    this.onFailure()
                }
                console.log(`ListRequest - Error node:${this.requestNode} error:${error}`);
            });
    }
}

export default ListRequest;
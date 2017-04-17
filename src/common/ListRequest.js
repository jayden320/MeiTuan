/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 */

import config from '../Config'
import { urlByAppendingParams } from './CommonFunc'

const kFirstPage = 1
const kCurrentPageKey = 'page'
const kPageSizeKey = 'count'
const kPageSize = 20
const kDefaultListNode = 'list'

class ListRequest {
    constructor(requestNode: String) {
        this.requestNode = requestNode
        this.isFirstLoad = true
        this.dataList = []
        this.isReload = true
        this.currentPage = kFirstPage
        this.noMoreData = false
    }

    requestFirstPage(params) {
        this.isReload = true
        this.startRequest(params, kFirstPage)
    }

    requestNextPage(params) {
        this.isReload = false
        this.startRequest(params, this.currentPage + 1)
    }

    startRequest(params, page) {
        let requestParams = { ...params }
        requestParams[kCurrentPageKey] = page
        requestParams[kPageSizeKey] = kPageSize

        let url = urlByAppendingParams(config.host + this.requestNode, requestParams);
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

                if (this.onSuccess) {
                    this.onSuccess()
                }
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
/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 */

// Dimensions
import Dimensions from 'Dimensions'
import Platform from 'Platform'

export default {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    statusBarHeight:  (Platform.OS === 'ios' ? 20 : 0)
}
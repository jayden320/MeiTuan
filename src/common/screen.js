/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

import { Dimensions, Platform } from 'react-native'

export default {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    
    statusBarHeight: (Platform.OS === 'ios' ? 20 : 0)
}
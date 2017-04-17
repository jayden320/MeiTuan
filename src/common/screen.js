/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 */

// Dimensions
const dimensions = require('Dimensions');
let Platform = require('Platform');

export default {
    width: dimensions.get('window').width,
    height: dimensions.get('window').height,
    statusBarHeight:  (Platform.OS === 'ios' ? 20 : 0)
}
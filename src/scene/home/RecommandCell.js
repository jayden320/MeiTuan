//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Heading1, Heading2, Paragraph } from '../../ui/Text'
import screen from '../../common/screen'
import color from '../../ui/color'

// create a component
class RecommandCell extends Component {
    render() {
        //         _type = @"recommend";
        // _recommendData = recommendData;
        // NSString *imageUrl = [_recommendData.squareimgurl stringByReplacingOccurrencesOfString:@"w.h" withString:@"160.0"];
        // [self.shopImage sd_setImageWithURL:[NSURL URLWithString:imageUrl] placeholderImage:[UIImage imageNamed:@"bg_customReview_image_default"]];

        // self.shopNameLabel.text = recommendData.mname;
        // self.shopInfoLabel.text = [NSString stringWithFormat:@"[%@]%@",recommendData.range,recommendData.title];
        // NSString *priceStr = [NSString stringWithFormat:@"%d元",[recommendData.price intValue]];
        // NSLog(@"%@",priceStr);
        // CGSize labelSize = [priceStr sizeWithFont:[UIFont systemFontOfSize:17] constrainedToSize:CGSizeMake(200, 20) lineBreakMode:NSLineBreakByWordWrapping];
        // self.priceLabel.text = priceStr;
        // self.priceLabel.frame = CGRectMake(100, 75, labelSize.width+10, 20);
        let { info } = this.props
        let imageUrl = info.squareimgurl.replace('w.h', '160.0')
        let title = info.mname
        let subtitle = `[${info.range}]${info.title}`
        let price = info.price

        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.onPress()}>
                <Image source={{ uri: imageUrl }} style={styles.icon} />

                <View style={styles.rightContainer}>
                    <Heading1>{title}</Heading1>
                    <Paragraph numberOfLines={0} style={{marginTop: 8}}>{subtitle}</Paragraph>
                    <View style={{flex:1, justifyContent: 'flex-end'}}>
                        <Heading1 style={styles.price}>{price}元</Heading1>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: color.border,
        backgroundColor: 'white',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex:1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: color.theme
    }
});

//make this component available to the app
export default RecommandCell;


import React, { PureComponent } from 'react'
import { Image } from 'react-native'

type Props = {
  tintColor: any,
  normalImage: any,
  selectedImage: any,
  focused: boolean,
}


class TabBarItem extends PureComponent<Props> {
  render() {
    let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
    return (
      <Image
        source={this.props.focused
          ? selectedImage
          : this.props.normalImage}
        style={{ tintColor: this.props.tintColor, width: 25, height: 25 }}
      />
    )
  }
}


export default TabBarItem

import Taro from '@tarojs/taro-rn';
import React from 'react';
import { View } from "@tarojs/components-rn";
let YmListItem = class YmListItem extends Taro.Component {
  render() {
    const props = this.props;

    return <View className="ym-list__item">
      
    </View>;
  }

};
export { YmListItem as default };

YmListItem.defaultProps = {};
YmListItem.propTypes = {};
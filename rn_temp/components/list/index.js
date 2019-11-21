import Taro from '@tarojs/taro-rn';
import React from 'react';
import { View } from "@tarojs/components-rn";
let YmList = class YmList extends Taro.Component {
  render() {
    const props = this.props;

    return <View className="ym-list">
      {props.children}
    </View>;
  }

};
export { YmList as default };

YmList.defaultProps = {};
YmList.propTypes = {};
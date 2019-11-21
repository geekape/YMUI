import Taro from '@tarojs/taro-rn';
import React from 'react';
import { useEffect } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";
var _styleSheet = indexStyleSheet;
let Index = class Index extends Taro.Component {
  render() {
    useEffect(() => {
      let num = 1;
      setInterval(() => {
        document.title = '首页' + num;
        num++;
      }, 1000);
    }, []);
    console.log(this);
    return <View style={_styleSheet["index"]}>
      <Text>Hello world1!</Text>
    </View>;
  }

};
export { Index as default };

Index.config = {
  navigationBarTitleText: '首页'
};
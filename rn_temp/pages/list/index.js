import Taro from '@tarojs/taro-rn';
import React from 'react';
import { View } from "@tarojs/components-rn";
import { YmList, YmListItem } from '@/components';
import indexStyleSheet from "./index_styles";
var _styleSheet = indexStyleSheet;
let ListPage = class ListPage extends Taro.Component {
  render() {
    console.log(this);
    return <View style={_styleSheet["page"]}>
      <YmList>
        <YmListItem />
      </YmList>
    </View>;
  }

};
export { ListPage as default };

ListPage.config = {
  navigationBarTitleText: '列表组件'
};
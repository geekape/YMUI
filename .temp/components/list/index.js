import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
export default class YmList extends Taro.Component {
  render() {
    const props = this.props;

    return <View className="ym-list">
      {props.children}
    </View>;
  }

}
YmList.options = {
  addGlobalClass: true
};
YmList.defaultProps = {};
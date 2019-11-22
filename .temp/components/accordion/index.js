import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
export default class YmAccordion extends Taro.Component {
  render() {
    const props = this.props;

    return <View className="ym-accordion">
      {props.children}
    </View>;
  }

}
YmAccordion.options = {
  addGlobalClass: true
};
YmAccordion.defaultProps = {
  children: '',
  open: false
};
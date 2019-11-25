import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
export default class YmNavbar extends Taro.Component {
  render() {
    const props = this.props;

    return <View className="ym-navbar">
      <div className="ym-navbar__left">
      
      </div>
      <div className="ym-navbar__logo"></div>
      <div className="ym-navbar__title">{props.title}</div>
    </View>;
  }

}
YmNavbar.options = {
  addGlobalClass: true
};
YmNavbar.defaultProps = {};
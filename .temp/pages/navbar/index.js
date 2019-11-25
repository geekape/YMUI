import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import './index.scss';
export default class NavbarPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Navbar组件'
  };

  render() {
    return <View className="page">
     
    </View>;
  }

}
NavbarPage.config = { navigationBarTitleText: 'Navbar组件' };
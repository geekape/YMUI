import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import classNames from 'classnames';
export default class YmList extends Taro.Component {
  render() {
    const props = this.props;

    return <View className={classNames('ym-list', {
      'ym-list--border': props.hasBorder
    })}>
      {props.children}
    </View>;
  }

}
YmList.options = {
  addGlobalClass: true
};
YmList.defaultProps = {
  children: '',
  hasBorder: true
};
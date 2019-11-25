import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import classNames from 'classnames';
export default class YmButton extends Taro.Component {
  render() {
    const props = this.props;

    const rootClass = classNames('ym-button', `ym-button--${props.type}`, `ym-button--${props.size}`, {
      'ym-button--round': props.round,
      'ym-button--plain': props.plain
    });
    const rootStyle = {
      background: props.color,
      color: props.color && '#fff',
      borderColor: props.color && 'transparent'
    };
    return <View className={rootClass} style={rootStyle}>
      {props.children}
    </View>;
  }

}
YmButton.options = {
  addGlobalClass: true
};
YmButton.defaultProps = {
  children: '',
  calssName: '',
  style: '',
  type: 'default',
  size: 'normal',
  color: '',
  disabled: false,
  plain: false,
  round: false,
  loading: false,
  url: '',
  onClick: () => {}
};
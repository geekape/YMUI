import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import classNames from 'classnames'
import { IProps } from '../../../@types/button'

export default function YmButton(props: IProps) {

  const rootClass = classNames(
    'ym-button',
    `ym-button--${props.type}`,
    `ym-button--${props.size}`,
    {
      'ym-button--round': props.round,
      'ym-button--plain': props.plain,
    }
  )

  const rootStyle = {
    background: props.color,
    color: props.color && '#fff',
    borderColor: props.color && 'transparent',
  }

  return (
    <View className={rootClass} style={rootStyle}>
      {props.children}
    </View>
  )
}

YmButton.options = {
  addGlobalClass: true
}

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
  onClick: ()=> {},
} as IProps;

import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import { IProps } from '../../../@types/list'

export default function YmList(props: IProps) {
  return (
    <View className={classNames('ym-list', {
      'ym-list--border': props.hasBorder
    })}>
      {props.children}
    </View>
  )
}

YmList.options = {
  addGlobalClass: true
}

YmList.defaultProps = {
  children: '',
  hasBorder: true
} as IProps

import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { IProps } from '../../../@types/accordion'

export default function YmAccordion(props: IProps) {
  return (
    <View className="ym-accordion">
      {props.children}
    </View>
  )
}

YmAccordion.options = {
  addGlobalClass: true
}

YmAccordion.defaultProps = {
  children: '',
  open: false
} as IProps;

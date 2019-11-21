import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default function YmList(props) {
  return (
    <View className="ym-list">
      {props.children}
    </View>
  )
}

YmList.options = {
  addGlobalClass: true
}

YmList.defaultProps = {

}

import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { IProps } from '../../../@types/navbar'

export default function YmNavbar(props: IProps) {
  return (
    <View className="ym-navbar">
      <div className="ym-navbar__left">
      
      </div>
      <div className="ym-navbar__logo"></div>
      <div className="ym-navbar__title">{props.title}</div>
    </View>
  )
}

YmNavbar.options = {
  addGlobalClass: true
}

YmNavbar.defaultProps = {

} as IProps;

import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { YmList, YmListItem, YmButton } from '../../components'
import './index.scss'

export default function ButtonPage() {

  return (
    <View className="page">
      <YmList hasBorder={false}>
        <YmListItem groupTitle title="按钮类型" />

        <View className="block">
          <YmButton>默认按钮</YmButton>
          <YmButton type="primary">默认按钮</YmButton>
          <YmButton type="info">默认按钮</YmButton>
          <YmButton type="warning">默认按钮</YmButton>
          <YmButton type="danger">默认按钮</YmButton>
        </View>
      </YmList>

      <YmList hasBorder={false}>
        <YmListItem groupTitle title="朴素按钮" />

        <View className="block">
          <YmButton plain>默认按钮</YmButton>
          <YmButton plain type="primary">默认按钮</YmButton>
          <YmButton plain type="info">默认按钮</YmButton>
          <YmButton plain type="warning">默认按钮</YmButton>
          <YmButton plain type="danger">默认按钮</YmButton>
        </View>
      </YmList>

      <YmList hasBorder={false}>
        <YmListItem groupTitle title="自定义按钮颜色" />

        <View className="block">
          <YmButton>默认按钮</YmButton>
          <YmButton color="red">默认按钮</YmButton>
          <YmButton color="linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)">默认按钮</YmButton>
          <YmButton color="linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)">默认按钮</YmButton>
          <YmButton color="linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%)">默认按钮</YmButton>
        </View>
      </YmList>

      <YmList hasBorder={false}>
        <YmListItem groupTitle title="按钮大小" />

        <View className="block">
          <YmButton type="primary" size="large">大按钮</YmButton>
          <YmButton type="primary" size="normal">正常按钮</YmButton>
          <YmButton type="primary" size="small">小按钮</YmButton>
          <YmButton type="primary" size="mini">超小按钮</YmButton>
        </View>
      </YmList>

      <YmList hasBorder={false}>
        <YmListItem groupTitle title="按钮形状" />

        <View className="block">
          <YmButton type="primary" size="large">正常按钮</YmButton>
          <YmButton type="primary" size="large" round>方形按钮</YmButton>
        </View>
      </YmList>

    </View>
  )
}

ButtonPage.config = {
  navigationBarTitleText: 'Button组件'
}

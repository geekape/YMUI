import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { YmList, YmListItem, YmAccordion } from '../../components'
import './index.scss'

export default function ListPage() {

  console.log(this)
  return (
    <View className="page">
      <YmList>
        <YmListItem groupTitle title="普通列表" />
        <YmAccordion title="123">
          <View className="block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
          </View>
        </YmAccordion>
      </YmList>
    </View>
  )
}

ListPage.config = {
  navigationBarTitleText: '列表组件'
}

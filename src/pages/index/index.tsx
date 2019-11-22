import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { YmList, YmListItem, YmAccordion } from '../../components'
import './index.scss'

export default function Index() {

  console.log(this)
  return (
    <View className="index">
      <YmList>
        <YmListItem accordionItem title="基础组件">
          <YmAccordion open={false}>
            <YmListItem title="List" link="../list/index" />
            <YmListItem title="Accordion" link="../accordion/index" />
          </YmAccordion>
        </YmListItem>
      </YmList>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}

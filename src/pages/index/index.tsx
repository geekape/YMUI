import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { YmList, YmListItem, YmAccordion } from '../../components'
import './index.scss'

export default function Index() {

  console.log(this)
  return (
    <View className="index">
      <YmList>
        <YmAccordion title="基础组件">
          <YmListItem title="List" link="../list/index" />
          <YmListItem title="Accordion" link="../accordion/index" />
          <YmListItem title="Button" link="../button/index" />
        </YmAccordion>
      </YmList>

      <YmList>
        <YmAccordion title="反馈组件">
          <YmListItem title="Notify" link="../notify/index" />
        </YmAccordion>
      </YmList>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}

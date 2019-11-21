import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default function Index() {

  useEffect(()=> {
    let num = 1
    setInterval(()=> {
      document.title = '首页' + num
      num++
    }, 1000)
  }, [])

  console.log(this)
  return (
    <View className="index">
      <Text>Hello world1!</Text>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}

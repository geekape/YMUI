import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { YmList, YmListItem } from '@/components'
import './index.scss'

export default function ListPage() {

  console.log(this)
  return (
    <View className="page">
      <YmList>
        <YmListItem groupTitle title="普通列表" />
        <YmListItem title="123" />
        <YmListItem title="123" />
        <YmListItem title="123" />
      </YmList>
      <YmList>
        <YmListItem groupTitle title="带链接的列表" />
        <YmListItem title="123" link="#" />
        <YmListItem title="123" link="#" />
        <YmListItem title="123" link="#" />
      </YmList>
      <YmList>
        <YmListItem groupTitle title="带描述的列表" />
        <YmListItem title="123" after="CEO" link="#" />
        <YmListItem title="123" after="CEO" link="#" />
        <YmListItem title="123" after="CEO" link="#" />
      </YmList>
      <YmList>
        <YmListItem groupTitle title="带图片的列表" />
        <YmListItem renderMedia={<Image className="list-img" src={require('@/img/pic-head.png')} />} title="123" after="CEO" link="#" />
        <YmListItem renderMedia={<Image className="list-img" src={require('@/img/pic-head.png')} />} title="123" after="CEO" link="#" />
        <YmListItem renderMedia={<Image className="list-img" src={require('@/img/pic-head.png')} />} title="123" after="CEO" />
      </YmList>

      <YmList>
        <YmListItem groupTitle title="带消息数量的列表" />
        <YmListItem renderMedia={<Image className="list-img" src={require('@/img/pic-head.png')} />} title="123" badge={2} link="#" />
        <YmListItem renderMedia={<Image className="list-img" src={require('@/img/pic-head.png')} />} title="123" badge={10} link="#" />
        <YmListItem renderMedia={<Image className="list-img" src={require('@/img/pic-head.png')} />} title="123" badge={10} />
      </YmList>

      <YmList>
        <YmListItem groupTitle title="带二级标题的列表" />
        <YmListItem title="123"　subtitle="二级标题" badge={2} link="#" />
        <YmListItem title="123"　subtitle="二级标题" badge={10} link="#" />
        <YmListItem title="123"　subtitle="二级标题" badge={10} />
      </YmList>
    </View>
  )
}

ListPage.config = {
  navigationBarTitleText: '列表组件'
}

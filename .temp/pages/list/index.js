import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Image } from '@tarojs/components';
import { YmList, YmListItem } from "../../components/index";
import './index.scss';
export default class ListPage extends Taro.Component {
  config = {
    navigationBarTitleText: '列表组件'
  };

  render() {
    console.log(this);
    return <View className="page">
      <View className="page-title">普通列表</View>
      <YmList>
        <YmListItem title="123" />
        <YmListItem title="123" />
        <YmListItem title="123" />
      </YmList>
      <View className="page-title">带链接的列表</View>
      <YmList>
        <YmListItem title="123" link="#" />
        <YmListItem title="123" link="#" />
        <YmListItem title="123" link="#" />
      </YmList>
      <View className="page-title">带描述的列表</View>
      <YmList>
        <YmListItem title="123" after="CEO" link="#" />
        <YmListItem title="123" after="CEO" link="#" />
        <YmListItem title="123" after="CEO" link="#" />
      </YmList>
      <View className="page-title">带图片的列表</View>
      <YmList>
        <YmListItem renderMedia={<Image className="list-img" src={require('@/img/pic-head.png')} />} title="123" after="CEO" link="#" />
        <YmListItem renderMedia={<Image className="list-img" src={require('@/img/pic-head.png')} />} title="123" after="CEO" link="#" />
        <YmListItem renderMedia={<Image className="list-img" src={require('@/img/pic-head.png')} />} title="123" after="CEO" />
      </YmList>

      <View className="page-title">带消息数量的列表</View>
      <YmList>
        <YmListItem renderMedia={<Image className="list-img" src={require('@/img/pic-head.png')} />} title="123" badge={2} link="#" />
        <YmListItem renderMedia={<Image className="list-img" src={require('@/img/pic-head.png')} />} title="123" badge={10} link="#" />
        <YmListItem renderMedia={<Image className="list-img" src={require('@/img/pic-head.png')} />} title="123" badge={10} />
      </YmList>

      <View className="page-title">带二级标题的列表</View>
      <YmList>
        <YmListItem title="123" subtitle="二级标题" badge={2} link="#" />
        <YmListItem title="123" subtitle="二级标题" badge={10} link="#" />
        <YmListItem title="123" subtitle="二级标题" badge={10} />
      </YmList>
    </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}
ListPage.config = { navigationBarTitleText: '列表组件' };
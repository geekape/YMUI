import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import { YmList, YmListItem, YmAccordion } from "../../components/index";
import './index.scss';
export default class ListPage extends Taro.Component {
  config = {
    navigationBarTitleText: '列表组件'
  };

  render() {
    console.log(this);
    return <View className="page">
      <YmList>
        <YmListItem groupTitle title="普通列表" />
        <YmAccordion title="123">
          <View className="block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
          </View>
        </YmAccordion>
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
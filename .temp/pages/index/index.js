import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import { YmList, YmListItem, YmAccordion } from "../../components/index";
import './index.scss';
export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: '首页'
  };

  render() {
    console.log(this);
    return <View className="index">
      <YmList>
        <YmListItem accordionItem title="基础组件">
          <YmAccordion open={false}>
            <YmListItem title="List" link="../list/index" />
            <YmListItem title="Accordion" link="../accordion/index" />
          </YmAccordion>
        </YmListItem>
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
Index.config = { navigationBarTitleText: '首页' };
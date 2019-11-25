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
import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import './index.scss';
export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: '首页'
  };

  render() {
    Taro.useEffect(() => {
      let num = 1;
      setInterval(() => {
        document.title = '首页' + num;
        num++;
      }, 1000);
    }, []);
    console.log(this);
    return <View className="index">
      <Text>Hello world1!</Text>
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
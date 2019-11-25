import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { YmListItem } from '../index';
import classNames from 'classnames';
export default class YmAccordion extends Taro.Component {
  render() {
    const props = this.props;

    const [open, setOpen] = Taro.useState(true);
    return <View className={classNames('ym-accordion', {
      'ym-accordion--open': open
    })}>
      <YmListItem className="ym-accordion__header" title={props.title} accordionItem onClick={() => setOpen(s => !s)}>
      </YmListItem>
      <View className="ym-accordion__content">
        {props.children}
      </View>
    </View>;
  }

}
YmAccordion.options = {
  addGlobalClass: true
};
YmAccordion.defaultProps = {
  children: '',
  open: false,
  title: ''
};
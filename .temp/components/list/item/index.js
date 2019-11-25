import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import classNames from 'classnames';
export default class YmListItem extends Taro.Component {
  render() {
    const props = this.props;

    const handleClick = () => {
      if (props.link) {
        Taro.navigateTo({ url: props.link });
      } else {
        props.onClick();
      }
    };
    return <View className={classNames('ym-list__item', {
      'ym-list__item--link': props.link,
      'ym-list__item--group-title': props.groupTitle,
      'ym-list__item--accordion': props.accordionItem,
      'ym-list__item--accordion-open': open
    })} onClick={handleClick}>
      {props.renderMedia && <View className="ym-list__item-hd">{props.renderMedia}</View>}
      <View className="ym-list__item-content">
        <View className="ym-list__item-bd">
          <View className="ym-list__item-title">{props.title}</View>
          <View className="ym-list__item-subtitle">{props.subtitle}</View>
        </View>
        <View className="ym-list__item-ft">
          {props.badge != 0 && <View className="ym-list__item-badge">{props.badge}</View>}
          {props.after && <View className="ym-list__item-after">{props.after}</View>}
          <View className={classNames('iconfont', {
            'icon-right': props.link,
            'icon-unfold': props.accordionItem && !open,
            'icon-fold': props.accordionItem && open
          })}></View>
        </View>
      </View>
    </View>;
  }

}
YmListItem.options = {
  addGlobalClass: true
};
YmListItem.defaultProps = {
  children: '',
  title: '',
  subtitle: '',
  after: '',
  badge: 0,
  link: '',
  renderMedia: '',
  groupTitle: false,
  onClick: () => {},
  accordionItem: false
};
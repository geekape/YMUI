import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { YmList, YmListItem } from '../index'
import { IProps } from '../../../@types/accordion'
import classNames from 'classnames'
export default function YmAccordion(props: IProps) {
  const [open, setOpen] = useState(true)

  return (
    <View className={classNames('ym-accordion', {
      'ym-accordion--open': open
    })}>
      <YmListItem
        className='ym-accordion__header'
        title={props.title}
        accordionItem
        onClick={()=> setOpen(s=> !s)}
      >
      </YmListItem>
      <View className="ym-accordion__content">
        {props.children}
      </View>
    </View>
  )
}

YmAccordion.options = {
  addGlobalClass: true
}

YmAccordion.defaultProps = {
  children: '',
  open: false,
  title: ''
} as IProps

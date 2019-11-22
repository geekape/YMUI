import { ComponentClass } from "react"

export interface IProps {
  // 标题
  title: string,
  // 二级标题
  subtitle: string,
  // 描述
  after: string,
  // 数量
  badge: number,
  // 跳转链接
  link: string,
  // jsx，头部内容，可放icon或图片
  renderMedia: string,
  groupTitle: boolean, //styicky
  onClick: Function,
  accordionItem: boolean,
  children: string
}

declare const ListItem: ComponentClass<IProps>
export default ListItem;
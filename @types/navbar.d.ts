import { ComponentClass } from "react"

export interface IProps {
  // 导航标题
  logo: string,
  title: string,
}

declare const Accordion: ComponentClass<IProps>
export default Accordion;
import { ComponentClass } from "react"

export interface IProps {
  children: any,
  open?: false
}

declare const Accordion: ComponentClass<IProps>
export default Accordion;
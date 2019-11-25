import { ComponentClass, Children } from "react"

export interface IProps {
  hasBorder: boolean,
  children: any
}

declare const List: ComponentClass<IProps>
export default List;
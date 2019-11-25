import { ComponentClass } from "react"

export interface IProps {
  children: any,
  calssName?: String,
  style?: String | Object,
  type: 'primary' | 'info' | 'warning' | 'danger' | 'default',
  size?: 'large' | 'small' | 'mini' | 'normal',
  color?: String,
  disabled?: Boolean,
  plain?: Boolean,
  round?: Boolean,
  loading?: Boolean,
  url?: String,
  onClick?: Function
}

declare const Button: ComponentClass<IProps>
export default Button;
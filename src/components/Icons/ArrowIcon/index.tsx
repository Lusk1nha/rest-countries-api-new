import { Icon } from "../Icon";
import { IIconProps } from "../../../shared/props/IIconProps";

export const ArrowIcon = (props: IIconProps) => (
  <Icon fill={props.iconColor ?? "black"} x="0" y="0" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" width="100%" height="100%" xmlSpace="preserve">
    <path d="M26.71,10.29l-10-10a1,1,0,0,0-1.41,0l-10,10,1.41,1.41L15,3.41V32h2V3.41l8.29,8.29Z" fill={props.pathColor} />
  </Icon>
);
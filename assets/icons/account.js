import { BTN_VARIANTS } from "@app/common/constants/styles";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function AccountIcon(props) {
  if (props.variant === BTN_VARIANTS.outlined) {
    return (
      <Svg width={19} height={22} viewBox='0 0 19 22' fill='none' {...props}>
        <Path
          d='M9.66 9.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 01-4.27-4.43C5.06 2.99 7.04 1 9.5 1a4.435 4.435 0 01.16 8.87zM3.629 13.433c-2.839 1.69-2.839 4.446 0 6.127 3.226 1.92 8.516 1.92 11.742 0 2.839-1.691 2.839-4.447 0-6.127-3.214-1.91-8.504-1.91-11.742 0z'
          stroke={props.color}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    );
  }
  return (
    <Svg width={19} height={22} viewBox='0 0 19 22' fill='none' {...props}>
      <Path
        d='M9.66 9.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 01-4.27-4.43C5.06 2.99 7.04 1 9.5 1a4.435 4.435 0 01.16 8.87zM3.629 13.433c-2.839 1.69-2.839 4.446 0 6.127 3.226 1.92 8.516 1.92 11.742 0 2.839-1.691 2.839-4.447 0-6.127-3.214-1.91-8.504-1.91-11.742 0z'
        fill={props.color}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

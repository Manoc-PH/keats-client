import { BTN_VARIANTS } from "@app/common/constants/styles";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function RecipeIcon(props) {
  if (props.variant === BTN_VARIANTS.outlined) {
    return (
      <Svg width={23} height={22} viewBox='0 0 23 22' fill='none' {...props}>
        <Path
          d='M18.47 21h-14c-3 0-3-1.35-3-3v-1c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v1c0 1.65 0 3-3 3zM20.22 12v4H2.77v-4a8.001 8.001 0 018-8h1.45c.58 0 1.15.06 1.69.18 3.61.78 6.31 3.98 6.31 7.82z'
          stroke={props.color}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M14 3.5c0 .24-.03.46-.09.68-.54-.12-1.11-.18-1.69-.18h-1.45c-.58 0-1.14.06-1.68.18C9.03 3.96 9 3.74 9 3.5a2.5 2.5 0 015 0zM14.5 10h-6'
          stroke={props.color}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    );
  }
  return (
    <Svg width={21} height={20} viewBox='0 0 21 20' fill='none' {...props}>
      <Path
        d='M20.97 16v1c0 1.65 0 3-3 3h-14c-3 0-3-1.35-3-3v-1c0-.55.45-1 1-1h18c.55 0 1 .45 1 1zM13.41 3.18c.05-.2.08-.39.09-.6.03-1.16-.68-2.18-1.8-2.48a2.506 2.506 0 00-3.11 3.08A8.001 8.001 0 002.27 11v1.5c0 .55.45 1 1 1h15.45c.55 0 1-.45 1-1V11c0-3.84-2.7-7.04-6.31-7.82zM14 9.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z'
        fill={props.color}
      />
    </Svg>
  );
}

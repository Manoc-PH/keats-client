import Svg, { Path } from "react-native-svg";
import React from "react";

import { BTN_VARIANTS } from "@app/common/constants/styles";

export default function HelpIcon(props) {
  if (props.variant === BTN_VARIANTS.outlined) {
    return (
      <Svg width={22} height={22} viewBox='0 0 22 22' fill='none' {...props}>
        <Path
          d='M7 10h8M6 17.742h4l4.45 3.095c.66.46 1.55-.032 1.55-.868v-2.227c3 0 5-2.091 5-5.228V6.241c0-3.136-2-5.228-5-5.228H6c-3 0-5 2.092-5 5.228v6.273c0 3.137 2 5.228 5 5.228z'
          stroke={props.color}
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    );
  }
  return (
    <Svg width={20} height={21} viewBox='0 0 20 21' fill='none' {...props}>
      <Path
        d='M15 .11H5c-3 0-5 2.092-5 5.229v6.273c0 3.136 2 5.228 5 5.228h4l4.45 3.094c.66.46 1.55-.031 1.55-.867V16.84c3 0 5-2.092 5-5.228V5.339C20 2.202 18 .11 15 .11zm-1.5 9.223h-7c-.41 0-.75-.356-.75-.785 0-.428.34-.784.75-.784h7c.41 0 .75.356.75.784 0 .429-.34.784-.75.784z'
        fill={props.color}
      />
    </Svg>
  );
}

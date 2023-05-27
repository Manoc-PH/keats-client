import React from "react";
import Svg, { Path } from "react-native-svg";

import { BTN_VARIANTS } from "@app/common/constants/styles";

export default function HomeIcon(props) {
  if (props.variant === BTN_VARIANTS.outlined) {
    return (
      <Svg width={22} height={22} viewBox='0 0 22 22' fill='none' {...props}>
        <Path
          d='M11 17v-3M9.072 1.648L2.143 7.304c-.78.632-1.28 1.967-1.11 2.966l1.33 8.111c.24 1.447 1.6 2.619 3.04 2.619H16.6c1.43 0 2.8-1.182 3.04-2.619l1.33-8.111c.16-1-.34-2.334-1.11-2.966L12.93 1.66c-1.07-.877-2.8-.877-3.859-.01z'
          stroke={props.color}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    );
  }
  return (
    <Svg width={20} height={20} viewBox='0 0 20 20' fill='none' {...props}>
      <Path
        d='M18.68 6.01L12.24.77C10.982-.25 9.015-.26 7.767.76l-6.44 5.25C.403 6.76-.157 8.26.04 9.44l1.239 7.54C1.563 18.67 3.107 20 4.788 20h10.421c1.662 0 3.235-1.36 3.52-3.03l1.238-7.54c.177-1.17-.383-2.67-1.287-3.42zM10.736 16a.75.75 0 01-.738.75.75.75 0 01-.737-.75v-3c0-.41.334-.75.737-.75a.75.75 0 01.738.75v3z'
        fill={props.color}
      />
    </Svg>
  );
}

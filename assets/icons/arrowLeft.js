import themeColors from "@app/common/theme";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function ArrowLeftIcon(props) {
  return (
    <Svg
      width={props.width || 7}
      height={props.height || 12}
      viewBox='0 0 7 12'
      fill='none'
      {...props}>
      <Path
        d='M5.744 11L1.216 6.884a1.174 1.174 0 010-1.768L5.744 1'
        stroke={props.color || themeColors.secondary}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

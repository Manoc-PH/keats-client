import themeColors from "@app/common/theme";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function ArrowDownIcon(props) {
  return (
    <Svg
      width={props.width || 11}
      height={props.height || 6}
      viewBox='0 0 11 6'
      fill='none'
      {...props}>
      <Path
        d='M10 1L6.295 4.675a1.135 1.135 0 01-1.59 0L1 1'
        stroke={props.color || themeColors.secondary}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

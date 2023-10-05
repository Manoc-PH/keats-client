import themeColors from "@app/common/theme";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function CheckIcon(props) {
  return (
    <Svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox='0 0 20 20'
      fill='none'
      {...props}>
      <Path
        d='M4.334 10l3.773 3.773 7.56-7.546'
        stroke={props.color || themeColors.secondary}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

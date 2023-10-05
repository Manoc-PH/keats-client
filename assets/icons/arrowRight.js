import themeColors from "@app/common/theme";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function ArrowRightIcon(props) {
  return (
    <Svg
      width={props.width || 7}
      height={props.height || 12}
      viewBox='0 0 7 12'
      fill='none'
      {...props}>
      <Path
        d='M1.257 1l4.528 4.116a1.174 1.174 0 010 1.768L1.257 11'
        stroke={props.color || themeColors.secondary}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

import themeColors from "@app/common/theme";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function ArrowRightIcon(props) {
  return (
    <Svg
      width={props.width || 5}
      height={props.height || 9}
      viewBox='0 0 5 9'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        d='M1 1l2.756 2.881a.906.906 0 010 1.238L1 8'
        stroke={props.color || themeColors.primary}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

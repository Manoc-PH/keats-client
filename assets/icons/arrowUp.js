import themeColors from "@app/common/theme";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function ArrowUpIcon(props) {
  return (
    <Svg
      width={props.width || 11}
      height={props.height || 6}
      viewBox='0 0 11 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        d='M1 5l3.705-3.675a1.135 1.135 0 011.59 0L10 5'
        stroke={props.color || themeColors.secondary}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

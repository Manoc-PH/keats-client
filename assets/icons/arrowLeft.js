import themeColors from "@app/common/theme";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function ArrowLeftIcon(props) {
  return (
    <Svg
      width={props.width || 9}
      height={props.height || 17}
      viewBox='0 0 9 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        d='M8 15.263l-6.52-5.76c-.77-.68-.77-1.793 0-2.473L8 1.27'
        stroke={props.color || themeColors.secondary}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

import themeColors from "@app/common/theme";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function ArrowLeftIcon(props) {
  return (
    <Svg
      width={props.width || 9}
      height={props.height || 16}
      viewBox='0 0 9 16'
      fill='none'
      {...props}>
      <Path
        d='M8 15L1.57 9.237c-.76-.68-.76-1.794 0-2.474L8 1'
        stroke={props.color || themeColors.secondary}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

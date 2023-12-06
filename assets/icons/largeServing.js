import themeColors from "@app/common/theme";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function ServingIcon(props) {
  return (
    <Svg
      width={props.width || 34}
      height={props.height || 34}
      viewBox='0 0 34 34'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        d='M27 21.5v6c0 2.475-2.25 4.5-5 4.5H12c-2.75 0-5-2.025-5-4.5v-7.53m20 1.53h-6.467A8.591 8.591 0 0117 20.75c-1.1-.495-2.3-.75-3.517-.75L7 19.97m20 1.53v-6.255c0-.69-.433-1.635-.983-2.13l-3.534-3.18A1.44 1.44 0 0122 8.885V6.5H12v2.385c0 .39-.183.78-.483 1.05l-3.534 3.18c-.55.495-.983 1.44-.983 2.13v4.725m20 1.53V23M7 19.97v1.5M21.167 6.5h-8.334c-1.383 0-2.5-1.02-2.5-2.25S11.45 2 12.833 2h8.334c1.383 0 2.5 1.02 2.5 2.25s-1.117 2.25-2.5 2.25z'
        stroke={props.color || themeColors.primary}
        strokeWidth={props.strokeWidth || 3}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

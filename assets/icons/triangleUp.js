import themeColors from "@app/common/theme";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function TriangleUpIcon(props) {
  return (
    <Svg
      width={props.width || 10}
      height={props.height || 11}
      viewBox='0 0 10 11'
      fill='none'
      {...props}>
      <Path
        d='M3.133 1.85C3.791.14 6.21.14 6.867 1.85L9.15 7.781A2 2 0 017.283 10.5H2.717A2 2 0 01.85 7.782l2.283-5.933z'
        fill={props.color || themeColors.secondaryLight}
      />
    </Svg>
  );
}

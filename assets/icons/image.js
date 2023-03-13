import * as React from "react";
import { View } from "react-native";
import Svg, { Rect, Path, Circle } from "react-native-svg";

import themeColors from "@app/common/theme";

export default function ImageIcon(props) {
  return (
    <Svg
      width={props.width || 36}
      height={props.height || 36}
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Rect
        x={1.5}
        y={1.5}
        width={33}
        height={33}
        rx={5.5}
        stroke={themeColors.secondaryLight}
        strokeWidth={3}
      />
      <Path
        d='M9.7 28c-1.59 0-2.545-1.765-1.674-3.095l2.846-4.348a2 2 0 013.347 0l3.392 5.182a.854.854 0 101.428-.937l-2.58-3.924a2 2 0 01-.003-2.195l2.052-3.13a2 2 0 013.346.002l6.12 9.35c.87 1.33-.084 3.095-1.673 3.095H9.699z'
        fill={themeColors.secondaryLight}
      />
      <Circle cx={11} cy={13} r={3} fill={themeColors.secondaryLight} />
    </Svg>
  );
}

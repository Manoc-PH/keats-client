import themeColors from "@app/common/theme";
import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function PlusIcon(props) {
  return (
    <View
      style={{ aspectRatio: 1, justifyContent: "center", alignItems: "center" }}
      {...props}>
      <Svg
        width={props.width || 15}
        height={props.height || 15}
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <Path
          d='M1 7.5h13M7.5 14V1'
          stroke={props.color || themeColors.secondary}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    </View>
  );
}

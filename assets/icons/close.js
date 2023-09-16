import themeColors from "@app/common/theme";
import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function CloseIcon(props) {
  return (
    <View
      style={{ aspectRatio: 1, justifyContent: "center", alignItems: "center" }}
      {...props}>
      <Svg
        width={props.width || 24}
        height={props.height || 24}
        viewBox='0 0 24 24'
        fill='none'
        {...props}>
        <Path
          d='M6 6l12 12M6 18L18 6'
          stroke={props.color || themeColors.secondary}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    </View>
  );
}

import themeColors from "@app/common/theme";
import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function TrippleArrowDownIcon(props) {
  return (
    <View {...props}>
      <Svg
        width={props.width || 44}
        height={props.height || 53}
        viewBox='0 0 44 53'
        fill='none'
        {...props}>
        <Path
          d='M42 1.5L25.535 13.587c-1.944 1.428-5.126 1.428-7.07 0L2 1.5M42 38.342L25.535 50.43c-1.944 1.428-5.126 1.428-7.07 0L2 38.342M42 19.921L25.535 32.008c-1.944 1.428-5.126 1.428-7.07 0L2 19.921'
          stroke={props.color || themeColors.backgroundDark}
          strokeWidth={3}
          strokeMiterlimit={10}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    </View>
  );
}

import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function MinusIcon(props) {
  return (
    <View {...props}>
      <Svg
        width={props.width || 15}
        height={props.height || 2}
        viewBox='0 0 15 2'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <Path
          d='M1 1h13'
          stroke='#434343'
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    </View>
  );
}

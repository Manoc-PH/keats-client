import * as React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

function SearchIcon(props) {
  return (
    <View
      style={{
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        ...props.style,
      }}>
      <Svg
        width={props?.width || 22}
        height={props?.height || 22}
        viewBox='0 0 19 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}>
        <Path
          d='M8.556 16.111A7.556 7.556 0 108.556 1a7.556 7.556 0 000 15.111zM18 18l-4.108-4.108'
          stroke={props.color}
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    </View>
  );
}

export default SearchIcon;

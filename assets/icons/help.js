import React from "react";
import Svg, { Path } from "react-native-svg";

export default function HelpIcon(props) {
  return (
    <Svg width={20} height={20} viewBox='0 0 20 20' fill='none' {...props}>
      <Path
        d='M5 16.729h4l4.45 3.094c.66.46 1.55-.031 1.55-.867v-2.227c3 0 5-2.091 5-5.228V5.228C20 2.09 18 0 15 0H5C2 0 0 2.091 0 5.228V11.5c0 3.136 2 5.228 5 5.228z'
        fill={props.color}
      />
    </Svg>
  );
}

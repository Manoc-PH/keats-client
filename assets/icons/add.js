import React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";

export default function AddIcon(props) {
  return (
    <Svg width={56} height={56} viewBox='0 0 56 56' fill='none' {...props}>
      <G filter='url(#filter0_d_0_1)'>
        <Circle cx={28.0001} cy={26} r={23.6364} fill='#3EBD70' />
      </G>
      <Path
        d='M20.273 26h15.454M28 33.727V18.273'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Defs></Defs>
    </Svg>
  );
}

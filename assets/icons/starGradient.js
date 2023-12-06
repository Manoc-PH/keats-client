import themeColors from "@app/common/theme";
import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export default function StarGradientIcon(props) {
  return (
    <Svg
      width={props.width || 13}
      height={props.height || 13}
      viewBox='0 0 13 13'
      fill='none'
      {...props}>
      <Path
        d='M7.623.939l1.144 2.306c.156.321.572.63.923.688l2.073.348c1.326.223 1.638 1.192.682 2.15l-1.611 1.624c-.273.275-.423.806-.338 1.186l.461 2.012c.364 1.592-.474 2.208-1.872 1.376l-1.943-1.16c-.35-.21-.93-.21-1.287 0l-1.943 1.16c-1.391.832-2.236.21-1.872-1.376l.462-2.012c.084-.38-.065-.91-.338-1.186L.552 6.43c-.95-.957-.644-1.926.682-2.15l2.073-.347c.345-.059.76-.367.917-.688L5.368.94c.624-1.252 1.638-1.252 2.255 0z'
        fill={`url(#${props.id})`}
      />
      <Defs>
        <LinearGradient
          id={props.id}
          x1={1.31818}
          y1={6}
          x2={13}
          y2={6}
          gradientUnits='userSpaceOnUse'>
          <Stop offset={props.percent} stopColor={themeColors.yellow} />
          <Stop offset={props.percent} stopColor={themeColors.backgroundDark} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

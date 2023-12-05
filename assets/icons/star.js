import themeColors from "@app/common/theme";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function StarIcon(props) {
  return (
    <Svg
      width={props.width || 31}
      height={props.height || 30}
      viewBox='0 0 31 30'
      fill='none'
      {...props}>
      <Path
        d='M18.091 2.166l2.64 5.323c.36.741 1.32 1.452 2.13 1.588l4.784.802c3.06.514 3.78 2.752 1.575 4.96l-3.72 3.75c-.63.635-.974 1.86-.78 2.737l1.066 4.643c.84 3.674-1.095 5.096-4.32 3.175l-4.484-2.676c-.81-.484-2.145-.484-2.97 0l-4.485 2.676c-3.21 1.921-5.159.484-4.32-3.175l1.066-4.643c.195-.877-.15-2.102-.78-2.737l-3.72-3.75c-2.19-2.208-1.485-4.446 1.575-4.96l4.785-.802c.794-.136 1.754-.847 2.114-1.588l2.64-5.323c1.44-2.888 3.78-2.888 5.204 0z'
        fill={props.color || "#EFC65C"}
        stroke={props.strokeColor || "#EFC65C"}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

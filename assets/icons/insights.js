import { BTN_VARIANTS } from "@app/common/constants/styles";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function InsightsIcon(props) {
  if (props.variant === BTN_VARIANTS.outlined) {
    return (
      <Svg width={22} height={22} viewBox='0 0 22 22' fill='none' {...props}>
        <Path
          d='M8 21h6c5 0 7-2 7-7V8c0-5-2-7-7-7H8C3 1 1 3 1 8v6c0 5 2 7 7 7z'
          stroke={props.color}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M14.5 17.5c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2s-2 .9-2 2v9a2 2 0 002 2zM7.5 17.5c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2s-2 .9-2 2v3.5a2 2 0 002 2z'
          stroke={props.color}
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    );
  }
  return (
    <Svg width={20} height={20} viewBox='0 0 20 20' fill='none' {...props}>
      <Path
        d='M14.197 0H5.813C2.17 0 0 2.17 0 5.81v8.37C0 17.83 2.171 20 5.813 20h8.374C17.83 20 20 17.83 20 14.19V5.81C20.01 2.17 17.839 0 14.197 0zM7.914 14.19c0 .64-.52 1.16-1.17 1.16-.641 0-1.161-.52-1.161-1.16v-3.26c0-.64.52-1.16 1.16-1.16.65 0 1.17.52 1.17 1.16v3.26zm6.513 0c0 .64-.52 1.16-1.16 1.16-.65 0-1.171-.52-1.171-1.16V5.81c0-.64.52-1.16 1.17-1.16.64 0 1.161.52 1.161 1.16v8.38z'
        fill={props.color}
      />
    </Svg>
  );
}

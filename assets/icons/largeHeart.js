import themeColors from "@app/common/theme";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function LargeHeartIcon(props) {
  return (
    <Svg
      width={props.width || 34}
      height={props.height || 34}
      viewBox='0 0 34 34'
      fill='none'
      {...props}>
      <Path
        d='M16.515 29.303h0l-.01-.009-1.986-1.92s0 0 0 0c-3.07-2.977-5.72-5.807-7.954-8.49C4.47 16.365 3.5 13.838 3.5 11.273c0-1.998.629-3.584 1.853-4.865C6.577 5.13 8.052 4.5 9.875 4.5c1.014 0 2.043.252 3.103.796.972.497 1.905 1.35 2.774 2.653l1.174 1.764L18.2 8.019c1.016-1.352 2-2.234 2.931-2.741a6.148 6.148 0 012.995-.778c1.823 0 3.298.629 4.522 1.91 1.225 1.28 1.853 2.866 1.853 4.864 0 2.566-.97 5.092-3.065 7.61-2.234 2.683-4.884 5.512-7.953 8.489l-.001.001-1.986 1.92h0l-.01.01A.619.619 0 0117 29.5a.619.619 0 01-.485-.197z'
        stroke={props.color || themeColors.primary}
        strokeWidth={props.strokeWidth || 3}
      />
    </Svg>
  );
}

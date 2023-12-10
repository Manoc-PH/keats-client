import themeColors from "@app/common/theme";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function ServingIcon(props) {
  return (
    <Svg
      width={props.width || 8}
      height={props.height || 10}
      viewBox='0 0 8 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        d='M7 6.85v1.8C7 9.392 6.325 10 5.5 10h-3C1.675 10 1 9.393 1 8.65V6.391m6 .459H5.06c-.37 0-.73-.077-1.06-.225A2.571 2.571 0 002.945 6.4L1 6.391m6 .459V4.973a.98.98 0 00-.295-.638l-1.06-.955a.432.432 0 01-.145-.315V2.35h-3v.715a.432.432 0 01-.145.315l-1.06.955A.98.98 0 001 4.973v1.418m6 .459v.45m-6-.909v.45M5.25 2.35h-2.5c-.415 0-.75-.306-.75-.675C2 1.306 2.335 1 2.75 1h2.5c.415 0 .75.306.75.675 0 .369-.335.675-.75.675z'
        stroke={props.color || themeColors.secondaryLight}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

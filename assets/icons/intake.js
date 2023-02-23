import * as React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IntakeIcon(props) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg
        width={18}
        height={22}
        viewBox='0 0 17 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}>
        <Path
          d='M4.129 6.664v-.97c0-2.251 1.758-4.462 3.944-4.672 2.603-.26 4.798 1.85 4.798 4.482v1.38'
          stroke={props.color || "#A8AAAE"}
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M5.586 21h5.828c3.905 0 4.604-1.61 4.808-3.572l.729-6.002c.262-2.441-.418-4.432-4.566-4.432h-7.77c-4.148 0-4.828 1.991-4.566 4.432l.729 6.002C.982 19.39 1.68 21 5.586 21z'
          fill={props.color || "#A8AAAE"}
        />
        <Path
          d='M11.895 10.996h.01M5.095 10.996h.009'
          stroke={props.secondaryColor || "#fff"}
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    </View>
  );
}

export default IntakeIcon;

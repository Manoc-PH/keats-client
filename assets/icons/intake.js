import {
  FONT_SIZES,
  FONT_WEIGHTS,
  SPACING,
} from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import * as React from "react";
import { Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IntakeIcon(props) {
  return (
    <View style={{ aspectRatio: 1, position: "relative" }}>
      <Svg width={21} height={21} viewBox='0 0 21 21' fill='none' {...props}>
        <Path
          d='M.752 20.732a.864.864 0 01-.263-.625c0-.238.087-.447.263-.625L12.43 7.604a4.553 4.553 0 01-.292-2.962c.234-1.022.79-1.98 1.668-2.873.878-.873 1.942-1.434 3.19-1.682 1.25-.248 2.274.035 3.074.848.82.834 1.097 1.876.834 3.126-.264 1.25-.854 2.352-1.77 3.305-.8.833-1.694 1.379-2.68 1.637-.985.258-1.906.198-2.765-.179l-1.961 1.995 8.517 8.663a.864.864 0 01.264.625.864.864 0 01-.264.625.836.836 0 01-1.229 0l-8.517-8.663-8.518 8.663a.836.836 0 01-1.23 0zm4.273-9.824L1.542 7.366C.664 6.473.162 5.446.035 4.284A5.457 5.457 0 01.693.994a.813.813 0 01.674-.416c.292-.02.546.08.76.298l6.381 6.49-3.483 3.542z'
          fill={props.color || themeColors.secondary}
        />
      </Svg>
      <View
        style={{
          position: "absolute",
          bottom: -SPACING.Tiny,
          right: -SPACING.Tiny,
          paddingHorizontal: SPACING.Tiny,
          borderRadius: SPACING.Tiny,
          backgroundColor: themeColors.red,
        }}>
        {/* ! Do not use components to avoid circular dependency */}
        <Text
          style={{
            color: themeColors.background,
            fontFamily: FONT_WEIGHTS.Medium,
            fontSize: FONT_SIZES.Tiny,
          }}>
          {props?.count || 0}
        </Text>
      </View>
    </View>
  );
}

export default IntakeIcon;

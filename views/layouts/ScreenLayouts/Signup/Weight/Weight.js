import React, { useRef } from "react";
import { Dimensions, View, TextInput } from "react-native";
// Theme
import themeColors from "@app/common/theme";
// Utils
import { debounce } from "@app/common/utils/debounce";
// Constants
import {
  SPACING,
  FONT_WEIGHTS,
  FONT_SIZES,
} from "@app/common/constants/styles";
// Components
import { Body, SliderInput } from "@app/views/components";

export default function Weight(props) {
  const { weight, setWeight } = props;
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  const defaultHeight = 55;
  // Debounced Functions
  const debouncedSetAmount = debounce(setWeight, 100);
  // Refs
  const valueRef = useRef();
  // Functions
  function handleChange(v) {
    if (valueRef && valueRef.current) {
      valueRef.current.setNativeProps({ text: `${v}` });
      debouncedSetAmount(v);
    }
  }
  return (
    <View
      style={{
        width: width,
        height: height - SPACING.Huge * 2,
        alignItems: "center",
        justifyContent: "flex-end",
        padding: SPACING.Medium,
      }}>
      <View
        style={{
          width: width,
          height: SPACING.Large,
        }}>
        <SliderInput
          value={weight || defaultHeight}
          onChangeValue={handleChange}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: SPACING.Huge,
        }}>
        <TextInput
          style={{
            fontFamily: FONT_WEIGHTS.Regular,
            fontSize: FONT_SIZES.Regular,
            color: themeColors.secondary,
          }}
          ref={valueRef}
          defaultValue={weight.toString() || defaultHeight}
        />
        <Body>
          {" "}
          KG {`| ${Math.round((weight || defaultHeight) * 2.205)} LBS`}
        </Body>
      </View>
    </View>
  );
}

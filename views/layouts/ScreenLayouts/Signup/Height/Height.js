import React, { useRef } from "react";
import { Dimensions, View, TextInput } from "react-native";

// Components
import { Body, SliderInput, SubHeadline2 } from "@app/views/components";
// Theme
import themeColors from "@app/common/theme";
// Assets
import {
  MaleSvg,
  FemaleSvg,
  FemaleDarkSvg,
  MaleDarkSvg,
} from "@app/assets/imageSvg";
import { debounce } from "@app/common/utils/debounce";
// Constants
import {
  FONT_WEIGHTS,
  FONT_SIZES,
  SPACING,
} from "@app/common/constants/styles";
import { SEX } from "@app/common/constants/options";

import { styles } from "./styles";

export default function Height(props) {
  const { sex, height, setHeight } = props;
  const heightScreen = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  // Debounced Functions
  const debouncedSetAmount = debounce(setHeight, 100);
  // Refs
  const valueRef = useRef();
  // Functions
  function handleChange(v) {
    if (valueRef && valueRef.current) {
      valueRef.current.setNativeProps({ text: `${v}` });
      debouncedSetAmount(v);
    }
  }
  const maxHeight = 272;
  const usableScreen = Dimensions.get("window").height * 0.85;
  const defaultHeight = sex === SEX.female ? 149 : 163;

  function convertToFt(v) {
    if (v) {
      const inches = v / 2.54;
      const feet = Math.floor(inches / 12);
      return `${feet}'${Math.floor(inches % 12)} FT`;
    }
  }
  return (
    <View
      style={{
        width: width,
        height: heightScreen - SPACING.Huge * 2,
        alignItems: "center",
        justifyContent: "flex-end",
        padding: SPACING.Medium,
      }}>
      <View style={styles.heightContentWrapper}>
        <View style={styles.heightContentContainer}>
          <SubHeadline2 style={styles.subtitle}>
            Avg {sex === SEX.female ? "Female" : "Male"} Filipino{" "}
            {sex === SEX.female ? "(4'11 ft or 149 cm)" : "(5'4 ft or 163 cm)"}
          </SubHeadline2>
          {sex === SEX.female ? (
            <FemaleDarkSvg height={(usableScreen / maxHeight) * 149} />
          ) : (
            <MaleDarkSvg height={(usableScreen / maxHeight) * 163} />
          )}
        </View>
        <View style={styles.heightContentContainer}>
          {sex === SEX.female ? (
            <FemaleSvg height={(usableScreen / maxHeight) * (height || 149)} />
          ) : (
            <MaleSvg height={(usableScreen / maxHeight) * (height || 191)} />
          )}
        </View>
      </View>
      <View
        style={{
          width: width,
          height: SPACING.Large,
        }}>
        <SliderInput
          value={height || defaultHeight}
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
          defaultValue={height.toString() || defaultHeight}
        />
        <Body> CM | {convertToFt(height || defaultHeight)}</Body>
      </View>
    </View>
  );
}

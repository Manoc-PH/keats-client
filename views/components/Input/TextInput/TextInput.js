import React from "react";
import { View, TextInput as TextInputRN, PixelRatio } from "react-native";

import {
  BTN_VARIANTS,
  FONT_SIZES,
  SIZES,
  SPACING,
} from "@app/common/constants/styles";

import { styles } from "./styles";
import Button from "../../Basic/Button";
import SubHeadline1 from "../../Basic/Texts/SubHeadline1/SubHeadline1";

export default function TextInput(props) {
  // Destructure
  const {
    value,
    onChangeText,
    placeholder,
    startIcon,
    onStartIconPress,
    suffix,
    label,
    secureTextEntry,
    ...rest
  } = props;

  const maxHeight =
    FONT_SIZES.Medium * PixelRatio.getFontScale() + SPACING.Small * 3;
  const maxHeightWithLabel =
    (FONT_SIZES.Medium + FONT_SIZES.Regular) * PixelRatio.getFontScale() +
    SPACING.Small * 6 +
    2;
  return (
    <View
      style={{
        ...styles.wrapper,
        maxHeight: !!label ? maxHeightWithLabel : maxHeight,
      }}>
      {label && (
        <View style={styles.labelContainer}>
          <SubHeadline1>{label}</SubHeadline1>
        </View>
      )}
      <View style={styles.container}>
        {startIcon && (
          <Button
            variant={BTN_VARIANTS.transparent}
            size={SIZES.Tiny}
            onPress={onStartIconPress}>
            {startIcon}
          </Button>
        )}
        <View style={styles.inputContainer}>
          <TextInputRN
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            style={styles.txtInput}
            autoCorrect={false}
            secureTextEntry={secureTextEntry || false}
            {...rest}
          />
          {suffix && suffix}
        </View>
        {/* {startIcon && (
          <Button
            style={styles.btnContainer}
            variant={BTN_VARIANTS.transparent}
            size={SIZES.Tiny}
            onPress={onStartIconPress}>
            <SearchIcon
              height={SPACING.Medium}
              width={SPACING.Medium}
              style={styles.startIcon}
              color={themeColors.secondary}
            />
          </Button>
        )} */}
      </View>
    </View>
  );
}

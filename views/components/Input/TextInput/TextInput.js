import React from "react";
import { View, TextInput as TextInputRN } from "react-native";

import { BTN_VARIANTS, SIZES, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

import { styles } from "./styles";
import Button from "../../Basic/Button";

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
    ...rest
  } = props;

  return (
    <View style={styles.wrapper} {...rest}>
      {startIcon && (
        <Button
          style={styles.startBtnContainer}
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
  );
}

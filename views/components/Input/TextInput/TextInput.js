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
import { CloseIcon } from "@app/assets/icons";

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
    autoCapitalize,
    onClearPress,
    wrapperStyle,
    ...rest
  } = props;

  return (
    <View style={{ ...styles.wrapper, ...wrapperStyle }}>
      {label && (
        <View style={styles.labelContainer}>
          <SubHeadline1>{label}</SubHeadline1>
        </View>
      )}
      <View
        style={{
          ...styles.container,
          paddingLeft: startIcon && SPACING.Tiny,
          paddingRight: onClearPress && SPACING.Tiny,
        }}>
        {startIcon && (
          <Button
            variant={BTN_VARIANTS.transparent}
            size={SIZES.Tiny}
            onPress={onStartIconPress}
            icon={startIcon}
          />
        )}
        <View style={styles.inputContainer}>
          <TextInputRN
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            style={{
              ...styles.txtInput,
              marginLeft: startIcon ? SPACING.Small * -1 : 0,
            }}
            autoCorrect={false}
            secureTextEntry={secureTextEntry || false}
            autoCapitalize={autoCapitalize || "none"}
            {...rest}
          />
          {suffix && suffix}
        </View>
        {onClearPress && (
          <Button
            variant={BTN_VARIANTS.transparent}
            size={SIZES.Tiny}
            onPress={onClearPress}
            icon={<CloseIcon />}
          />
        )}
      </View>
    </View>
  );
}

import React from "react";
import { View, TextInput as TextInputRN, PixelRatio } from "react-native";

// Icons
import { MinusIcon, PlusIcon } from "@app/assets/icons";

// Constants
import {
  BTN_VARIANTS,
  FONT_SIZES,
  SIZES,
  SPACING,
} from "@app/common/constants/styles";

import { styles } from "./styles";
import Button from "../../Basic/Button";
import SubHeadline1 from "../../Basic/Texts/SubHeadline1/SubHeadline1";

export default function NumberInput(props) {
  // Destructure
  const {
    value,
    onChangeText,
    placeholder,
    startIcon,
    label,
    secureTextEntry,
    ...rest
  } = props;

  return (
    <View style={styles.wrapper}>
      {label && (
        <View style={styles.labelContainer}>
          <SubHeadline1>{label}</SubHeadline1>
        </View>
      )}
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <Button style={styles.btn} variant={BTN_VARIANTS.outlined}>
            <MinusIcon />
          </Button>
          <Button style={styles.btn} variant={BTN_VARIANTS.outlined}>
            <PlusIcon />
          </Button>
        </View>
        <View style={styles.inputContainer}>
          <TextInputRN
            onChangeText={onChangeText}
            value={value}
            inputMode='numeric'
            keyboardType='numeric'
            placeholder={placeholder}
            style={{
              ...styles.txtInput,
              marginLeft: startIcon ? SPACING.Small * -1 : 0,
            }}
            autoCorrect={false}
            secureTextEntry={secureTextEntry || false}
            {...rest}
          />
        </View>
      </View>
    </View>
  );
}

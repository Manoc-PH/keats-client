import React, { useState } from "react";
import {
  View,
  TextInput as TextInputRN,
  PixelRatio,
  StyleSheet,
} from "react-native";

// Icons
import { ArrowUpIcon, MinusIcon, PlusIcon } from "@app/assets/icons";

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

export default function SimpleSelectInput(props) {
  // Destructure
  const { onChange, placeholder, label, width, height, options, ...rest } =
    props;

  // Local State
  const [isOpen, setIsOpen] = useState(false);

  // Functions
  function handleChange(item) {
    onChange(item);
    setIsOpen(false);
  }
  const inlineStyles = StyleSheet.create({
    optionsContainer: {
      width: width ? width : 0,
      bottom: height ? height : styles.optionsContainer.bottom,
    },
  });

  return (
    <View style={styles.wrapper} {...rest}>
      {isOpen && (
        <View
          style={{
            ...styles.optionsContainer,
            ...inlineStyles.optionsContainer,
          }}>
          {options &&
            options.map((item) => (
              <Button
                size={SIZES.Small}
                key={item.value}
                variant={BTN_VARIANTS.transparent}
                style={styles.optionBtn}
                onPress={() => handleChange(item)}>
                {item.label}
              </Button>
            ))}
        </View>
      )}
      {label && (
        <View style={styles.labelContainer}>
          <SubHeadline1>{label}</SubHeadline1>
        </View>
      )}
      <View style={styles.container}>
        <Button
          style={styles.btn}
          variant={BTN_VARIANTS.transparent}
          size={SIZES.Small}
          endIcon={<ArrowUpIcon />}
          onPress={() => setIsOpen(!isOpen)}>
          {placeholder}
        </Button>
      </View>
    </View>
  );
}

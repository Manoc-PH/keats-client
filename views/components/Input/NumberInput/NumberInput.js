import React, { useState } from "react";
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
import SimpleSelectInput from "../SimpleSelectInput";

export default function NumberInput(props) {
  // Destructure
  const {
    value,
    onChange,
    incrementValue,
    maxValue,
    placeholder,
    label,
    optionPlaceholder,
    options,
    onOptionChange,
    ...rest
  } = props;

  // Local State
  const [inputWidth, setInputWidth] = useState();
  const [inputHeight, setInputHeight] = useState();

  // Functions
  function UpdateInputWidth(event) {
    var { width, height } = event.nativeEvent.layout;
    setInputWidth(width);
    setInputHeight(height);
  }

  function handleDecrement() {
    const updatedValue = parseFloat(value) - incrementValue;
    if (updatedValue >= 0) onChange(updatedValue);
  }
  function handleIncrement() {
    const updatedValue = parseFloat(value) + incrementValue;
    if (updatedValue <= maxValue) onChange(updatedValue);
  }

  return (
    <View style={styles.wrapper}>
      {label && (
        <View style={styles.labelContainer}>
          <SubHeadline1>{label}</SubHeadline1>
        </View>
      )}
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <Button
            onPress={handleDecrement}
            style={styles.btn}
            variant={BTN_VARIANTS.outlined}>
            <MinusIcon />
          </Button>
          <Button
            onPress={handleIncrement}
            style={styles.btn}
            variant={BTN_VARIANTS.outlined}>
            <PlusIcon />
          </Button>
        </View>
        <View style={styles.inputWrapper} onLayout={UpdateInputWidth}>
          <View style={styles.inputContainer}>
            <TextInputRN
              onChangeText={onChange}
              value={`${value || ""}`}
              inputMode='numeric'
              keyboardType='numeric'
              autoCorrect={false}
              style={{
                ...styles.txtInput,
              }}
              {...rest}
            />
          </View>
          {options && (
            <View style={styles.selectContainer}>
              <SimpleSelectInput
                width={inputWidth}
                height={inputHeight}
                options={options}
                onChange={onOptionChange}
                placeholder={optionPlaceholder}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

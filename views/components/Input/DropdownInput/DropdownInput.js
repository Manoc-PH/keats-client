import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import Button from "../../Basic/Button";
import Body from "../../Basic/Texts/Body";
import {
  FONT_SIZES,
  FONT_WEIGHTS,
  SPACING,
  ZINDEX,
} from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { ArrowDownIcon } from "@app/assets/icons";

function DropdownInput(props) {
  // Props
  const {
    style,
    placeholder,
    variant,
    size,
    color,
    backgroundColor,
    borderColor,
    ...rest
  } = props;

  // Local States
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
  ];

  // Functions
  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const buttonStyle = StyleSheet.create({
    defaults: {
      zIndex: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: size ? SPACING[size] * 2 : SPACING.Regular * 2,
      paddingVertical: size ? SPACING[size] * 0.82 : SPACING.Regular * 0.82,
      borderRadius: size ? SPACING[size] : SPACING.Regular,
      fontSize: size ? FONT_SIZES[size] : FONT_SIZES.Regular,
      fontWeight: FONT_WEIGHTS.SemiBold,
    },
    primary: {
      color: color || themeColors.background,
      backgroundColor: backgroundColor || themeColors.primary,
    },
    outlined: {
      backgroundColor: backgroundColor || themeColors.background,
      color: color || themeColors.primary,
      borderWidth: 1,
      borderColor: borderColor || themeColors.backgroundLight,
    },
    transparent: {
      backgroundColor: backgroundColor || `${themeColors.background}00`,
      color: color || themeColors.secondary,
      borderWidth: 0,
    },
  });
  const styles = StyleSheet.create({
    wrapper: { position: "relative" },
    container: {
      zIndex: ZINDEX.basicComponent,
      height: Dimensions.get("window").height / 4,
      position: "absolute",
      width: "100%",
      top: "100%",
      borderRadius: size ? SPACING[size] : SPACING.Regular,
      backgroundColor: themeColors.background,
      borderWidth: 1,
      borderColor: themeColors.backgroundLight,
      paddingVertical: size ? SPACING[size] * 0.82 : SPACING.Regular * 0.82,
    },
    text: {
      paddingHorizontal: size ? SPACING[size] * 2 : SPACING.Regular * 2,
      paddingVertical: size ? SPACING[size] * 0.82 : SPACING.Regular * 0.82,
    },
  });

  const currentStyle = buttonStyle[variant] || buttonStyle.outlined;
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={toggleDropdown}
        style={{
          ...buttonStyle.defaults,
          ...currentStyle,
          ...style,
        }}>
        <Body>{selectedItem || placeholder || "Select an option"}</Body>
        <ArrowDownIcon />
      </Pressable>
      {isOpen && (
        <ScrollView style={styles.container}>
          {options.map((option) => (
            <Pressable
              style={styles.text}
              key={option}
              onPress={() => selectItem(option)}>
              <Body>{option}</Body>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

export default DropdownInput;

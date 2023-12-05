import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Animated, Pressable } from "react-native";

const SwitchButton = ({
  options,
  switchWidth,
  switchHeight,
  onValueChange,
  children,
}) => {
  const [optionsLength] = useState(options?.length || 0);
  const [sbWidth] = useState(100);
  const [sbHeight] = useState(44);
  const offsetX = useRef(new Animated.Value(0)).current;

  const switchThump = (direction) => {
    onValueChange(direction);

    let spaceReducer = 3;
    if (optionsLength === 2) {
      spaceReducer = 6;
    }
    Animated.timing(offsetX, {
      toValue:
        ((switchWidth || sbWidth) / optionsLength - spaceReducer) *
        (direction - 1),
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <View
        style={[
          {
            width: switchWidth || sbWidth,
            height: switchHeight || sbHeight,
            borderRadius: SPACING.Regular,
            borderWidth: 1,
            borderColor: themeColors.backgroundDark,
            backgroundColor: themeColors.backgroundDark,
          },
        ]}>
        {optionsLength > 0 && (
          <View style={switchStyles.wrapper}>
            <Animated.View style={{ transform: [{ translateX: offsetX }] }}>
              <View
                style={[
                  switchStyles.wayBtnActive,
                  {
                    width:
                      (switchWidth / optionsLength || sbWidth / optionsLength) -
                      4,
                    height: switchHeight - 10 || sbHeight - 10,
                  },
                ]}
              />
            </Animated.View>
            <View style={switchStyles.textWrapper}>
              {options.map((value, i) => (
                <Pressable
                  key={value}
                  onPress={() => {
                    switchThump(i + 1);
                  }}
                  style={switchStyles.textContainer}>
                  <Text style={{ color: themeColors.secondary }}>{value}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}
      </View>
      {children}
    </View>
  );
};

const switchStyles = StyleSheet.create({
  wrapper: { height: "100%" },
  textWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100%",
  },
  wayBtnActive: {
    borderRadius: SPACING.Small,
    borderColor: themeColors.background,
    backgroundColor: themeColors.background,
    borderWidth: 1,
    marginTop: 4,
    marginRight: 4,
    marginLeft: 4,
  },
});

export default SwitchButton;

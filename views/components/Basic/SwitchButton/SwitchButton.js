import { RADIUS, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const SwitchButton = ({
  switchWidth,
  switchHeight,
  text1,
  text2,

  onValueChange,
  children,
}) => {
  const [activeSwitch, setActiveSwitch] = useState(1);
  const [sbWidth, setSbWidth] = useState(100);
  const [sbHeight, setSbHeight] = useState(44);
  const [direction, setDirection] = useState("ltr");
  const offsetX = useRef(new Animated.Value(0)).current;

  const switchDirection = (direction) => {
    let dir = "row";
    if (direction === "rtl") {
      dir = "row-reverse";
    } else {
      dir = "row";
    }
    return dir;
  };

  const switchThump = (direction) => {
    let dirsign = 1;
    if (direction === "rtl") {
      dirsign = -1;
    } else {
      dirsign = 1;
    }

    if (activeSwitch === 1) {
      setActiveSwitch(2);
      onValueChange(2);

      Animated.timing(offsetX, {
        toValue: ((switchWidth || sbWidth) / 2 - 6) * dirsign,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      setActiveSwitch(1);
      onValueChange(1);

      Animated.timing(offsetX, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          switchThump(direction);
        }}>
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
          <View
            style={{
              flexDirection: switchDirection(direction),
            }}>
            <Animated.View style={{ transform: [{ translateX: offsetX }] }}>
              <View
                style={[
                  switchStyles.wayBtnActive,
                  {
                    width: (switchWidth / 2 || sbWidth / 2) - 4,
                    height: switchHeight - 10 || sbHeight - 10,
                  },
                ]}
              />
            </Animated.View>

            <View
              style={[
                switchStyles.textPos,
                {
                  width: switchWidth / 2 || sbWidth / 2,
                  height: switchHeight - 6 || sbHeight - 6,
                  left: 0,
                },
              ]}>
              <Text style={{ color: themeColors.secondary }}>
                {text1 || "ON"}
              </Text>
            </View>

            <View
              style={[
                switchStyles.textPos,
                {
                  width: switchWidth / 2 || sbWidth / 2,
                  height: switchHeight - 6 || sbHeight - 6,
                  right: 0,
                },
              ]}>
              <Text style={{ color: themeColors.secondary }}>
                {text2 || "OFF"}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {children}
    </View>
  );
};

const switchStyles = StyleSheet.create({
  textPos: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
  },
  rtl: {
    flexDirection: "row-reverse",
  },
  ltr: {
    flexDirection: "row",
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

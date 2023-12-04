import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
} from "react-native";

// Theme
import themeColors from "@app/common/theme";

// Constants
import { FONT_SIZES, SPACING, ZINDEX } from "@app/common/constants/styles";

// Assets
import { ArrowDownIcon } from "@app/assets/icons";

import TextSkeleton from "../../Skeleton/TextSkeleton";
import Body from "../../Basic/Texts/Body";
import { RADIUS } from "@app/common/constants/styles";

const SelectList = (props) => {
  const { setSelected, value, data, isLoading } = props;

  // Local States
  const [dropdown, setDropdown] = useState(false);
  const [height] = useState(Dimensions.get("window").height / 3);

  // Refs
  const animatedvalue = useRef(new Animated.Value(0)).current;

  // Functions
  const open = () => {
    setDropdown(true);
    Animated.timing(animatedvalue, {
      toValue: height,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  const close = () => {
    Animated.timing(animatedvalue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => setDropdown(false));
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          if (!dropdown) open();
          else close();
        }}>
        {isLoading ? (
          <View style={styles.titleSkeleton}>
            <TextSkeleton fontSize={FONT_SIZES.Regular} />
          </View>
        ) : (
          <Body>{value || ""}</Body>
        )}
        <ArrowDownIcon />
      </TouchableOpacity>

      {dropdown ? (
        <Animated.View
          style={{ maxHeight: animatedvalue, ...styles.container }}>
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 10,
              overflow: "hidden",
            }}
            nestedScrollEnabled={true}>
            {data?.length >= 1 &&
              data.map((item) => {
                return (
                  <TouchableOpacity
                    style={[styles.option]}
                    key={item.value}
                    onPress={() => {
                      setSelected(item);
                      close();
                    }}>
                    <Body>{item.label}</Body>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        </Animated.View>
      ) : null}
    </View>
  );
};

export default SelectList;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: RADIUS.Regular,
    borderColor: themeColors.backgroundLight,
    paddingHorizontal: SPACING.Large,
    paddingVertical: SPACING.Regular,
  },
  container: {
    width: "100%",
    borderWidth: 1,
    borderRadius: RADIUS.Regular,
    marginTop: SPACING.Small,
    overflow: "hidden",
    borderColor: themeColors.backgroundLight,
    backgroundColor: themeColors.background,
  },
  option: {
    paddingHorizontal: SPACING.Large,
    paddingVertical: SPACING.Small,
    overflow: "hidden",
  },
  titleSkeleton: { width: Dimensions.get("window").width / 1.5 },
});

import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Platform,
} from "react-native";
const { width } = Dimensions.get("window");

const ITEM_SIZE = Platform.OS === "ios" ? width * 0.82 : width * 0.84;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export default function Carousel(props) {
  const { data, height } = props;
  const [dataState, setDataState] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;

  // UseEffects
  useEffect(() => {
    setDataState([{ key: "empty-left" }, ...data, { key: "empty-right" }]);
  }, [data]);
  return (
    <View style={styles.container}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={dataState}
        keyExtractor={(item) => item.key}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: "center" }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment='start'
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          if (!item?.children) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
          }
          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [30, 10, 30],
            extrapolate: "clamp",
          });
          return (
            <View style={{ width: ITEM_SIZE }}>
              <Animated.View
                style={{
                  width: ITEM_SIZE,
                  height: height || ITEM_SIZE * 1.5,
                  alignItems: "center",
                  justifyContent: "center",
                  transform: [{ translateY }],
                }}>
                <View
                  style={{
                    width: ITEM_SIZE - SPACING.Large,
                    height: height || ITEM_SIZE * 1.5 - SPACING.Large,
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  {item.children}
                </View>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
});

import { SPACING } from "@app/common/constants/styles";
import { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Dimensions, Animated, Platform } from "react-native";
const { width } = Dimensions.get("window");

const ITEM_SIZE = width;

export default function CarouselImage(props) {
  const { data, height } = props;
  const [dataState, setDataState] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;

  // Functions
  const calculateCurrentIndex = (event) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const index = Math.round(contentOffset.x / layoutMeasurement.width);
    console.log(index);
  };

  // UseEffects
  useEffect(() => {
    setDataState(data);
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
          { useNativeDriver: false, listener: calculateCurrentIndex }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: ITEM_SIZE }}>
              <Animated.View
                style={{
                  width: ITEM_SIZE,
                  maxHeight: width,
                  height: height || width,
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <View
                  style={{
                    width: ITEM_SIZE - SPACING.Large,
                    maxHeight: width,
                    height: height || width,
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

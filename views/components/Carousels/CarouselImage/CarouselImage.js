import { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Platform,
  TextInput,
} from "react-native";
// Constants
import { FONT_SIZES, SPACING, ZINDEX } from "@app/common/constants/styles";
// Utils
import { debounce } from "@app/common/utils/debounce";
// Theme
import themeColors from "@app/common/theme";

const { width } = Dimensions.get("window");
const ITEM_SIZE = width;

export default function CarouselImage(props) {
  const { data, height } = props;
  const [dataState, setDataState] = useState([]);
  const [index, setIndex] = useState(1);
  const scrollX = useRef(new Animated.Value(0)).current;

  // Refs
  const valueRef = useRef();
  // Functions
  const calculateCurrentIndex = (event) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const i = Math.round(contentOffset.x / layoutMeasurement.width);
    if (valueRef && valueRef.current) {
      valueRef.current.setNativeProps({
        text: `${i + 1}/${data?.length || 0}`,
      });
    }
  };

  // UseEffects
  useEffect(() => {
    setDataState(data);
  }, [data]);
  return (
    <View style={styles.container}>
      <View style={styles.indexWrapper}>
        <View style={styles.indexContainer}>
          <TextInput
            style={styles.text}
            ref={valueRef}
            defaultValue={`${index.toString()}/${data?.length || 0}`}
          />
        </View>
      </View>
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
    position: "relative",
  },
  indexWrapper: {
    position: "absolute",
    bottom: SPACING.Regular,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  indexContainer: {
    zIndex: ZINDEX.basicComponent,
    elevation: ZINDEX.basicComponent,
    shadowColor: "#00000000",
    backgroundColor: `${themeColors.secondary}50`,
    paddingHorizontal: SPACING.Small,
    borderRadius: SPACING.Tiny,
  },
  text: {
    color: themeColors.background,
    fontSize: FONT_SIZES.Small,
  },
});

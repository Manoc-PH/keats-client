import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Animated,
  Dimensions,
  StyleSheet,
  View,
} from "react-native";

// Constants
import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

// import { debounce } from "@app/common/utils/debounce";

// Assets
import { TriangleUpIcon } from "@app/assets/icons";

const { width } = Dimensions.get("screen");
const _minNum = 1;
const _segmentsLength = 500;
const _segmentWidth = 3;
const _segmentSpacing = SPACING.Tiny + 1;
const _snapSegment = _segmentWidth + _segmentSpacing;
const _spacerWidth = (width - _segmentWidth) / 2;
const _rulerWidth = _spacerWidth * 2 + (_segmentsLength - 5) * _snapSegment;
const data = [...Array(_segmentsLength).keys()].map((i) => i + _minNum);

const SliderInput = (props) => {
  const { value, onChangeValue, ...rest } = props;

  // Local States
  const [currentValue] = useState(value || 25);

  // Refs
  const scrollViewRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  // Debounced Function
  // const debouncedFunction = debounce(onChangeValue, 100);

  // UseEffects
  useEffect(() => {
    const listener = scrollX.addListener(({ value: v }) => {
      const newValue = Math.round(v / _snapSegment) + _minNum;
      onChangeValue(newValue);
    });
    return () => scrollX.removeListener(listener);
  }, [scrollX]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (scrollViewRef && scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: (currentValue - _minNum) * _snapSegment,
          y: 0,
          animated: true,
        });
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <SafeAreaView style={{ ...styles.container, ...props.style }} {...rest}>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        contentContainerStyle={styles.scrollViewContainerStyle}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToInterval={_snapSegment}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}>
        <View style={styles.ruler}>
          <View style={styles.spacer} />
          {data.map((i) => {
            const tenth = i % 10 === 0;
            return (
              <View
                key={i}
                style={[
                  styles.segment,
                  {
                    backgroundColor: themeColors.secondaryLight,
                    height: tenth ? SPACING.Large : SPACING.Regular,
                    marginRight: i === data.length - 1 ? 0 : _segmentSpacing,
                  },
                ]}
              />
            );
          })}
          <View style={styles.spacer} />
        </View>
      </Animated.ScrollView>

      <View style={styles.iconContainer}>
        <TriangleUpIcon />
      </View>
    </SafeAreaView>
  );
};

export default SliderInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: themeColors.red,
  },
  scrollViewContainerStyle: {
    width: _rulerWidth,
    alignItems: "center",
  },
  ruler: {
    flexDirection: "row",
  },
  spacer: {
    width: _spacerWidth,
  },
  segment: {
    width: _segmentWidth,
  },
  iconContainer: {
    position: "absolute",
    left: (width - SPACING.Huge) / 2,
    bottom: "-100%",
    alignItems: "center",
    justifyContent: "center",
    width: SPACING.Huge,
  },
});

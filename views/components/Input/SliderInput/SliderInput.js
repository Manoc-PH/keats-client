import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Animated,
  Dimensions,
  StyleSheet,
  View,
} from "react-native";

const { width } = Dimensions.get("screen");
const _minNum = 1;
const _segmentsLength = 499;
const _segmentWidth = 2;
const _segmentSpacing = SPACING.Large;
const _snapSegment = _segmentWidth + _segmentSpacing;
const _spacerWidth = (width - _segmentWidth) / 2;
const _rulerWidth = _spacerWidth * 2 + (_segmentsLength - 1) * _snapSegment;
const data = [...Array(_segmentsLength).keys()].map((i) => i + _minNum);

const SliderInput = (props) => {
  const { value, setValue } = props;

  // Local States
  const [currentValue] = useState(value || 25);

  // Refs
  const scrollViewRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  // UseEffects
  useEffect(() => {
    const listener = scrollX.addListener(({ v }) => {
      const newValue = Math.round(v / _snapSegment) + _minNum;
      console.log(Math.round(v / _snapSegment) + _minNum);
      // if (v !== newValue) {
      //   setValue(newValue);
      // }
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
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default SliderInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
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
});

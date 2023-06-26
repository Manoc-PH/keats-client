import React, { useEffect, useMemo, useRef, useState } from "react";
import { SafeAreaView, Animated, StyleSheet, View } from "react-native";

// Constants
import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import Body from "../../Basic/Texts/Body";
import { debounce } from "@app/common/utils/debounce";

const _height = SPACING.Huge * 7;
const _minNum = 1;
const _segmentHeight = SPACING.Large * 2;
const _segmentSpacing = SPACING.Regular;
const _snapSegment = _segmentHeight + _segmentSpacing;
const _spacerHeight = (_height - _segmentHeight) / 2;

const VerticaSlider = (props) => {
  const { value, onChangeValue, width: widthProp, data, ...rest } = props;
  if (!data) {
    return;
  }
  // UseMemos
  const _rulerHeight = useMemo(
    () => _spacerHeight + (data.length + 2) * _snapSegment,
    [data]
  );
  const width = useMemo(() => widthProp || SPACING.Huge * 3, [widthProp]);

  // Local States
  const [currentValue] = useState(data.indexOf(value) || 1);

  // Refs
  const scrollViewRef = useRef();
  const scrollY = useRef(new Animated.Value(0)).current;

  // UseEffects
  useEffect(() => {
    const listener = scrollY.addListener(({ value: v }) => {
      const newValue = Math.round(v / _snapSegment) + _minNum;
      if (onChangeValue) debounce(onChangeValue(newValue), 300);
    });
    return () => scrollY.removeListener(listener);
  }, [scrollY]);

  useEffect(() => {
    if (scrollViewRef && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: (currentValue - _minNum) * _snapSegment,
        x: 0,
        animated: false,
      });
    }
  }, []);

  const styles = StyleSheet.create({
    container: {
      height: _height,
      width,
      position: "relative",
    },
    selectorContainer: {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      zIndex: -1,
      width,
    },
    selector: {
      height: _segmentHeight,
      width,
      borderColor: themeColors.backgroundLight,
      borderWidth: 1,
      borderRadius: SPACING.Small,
    },
    sliderContainer: {
      overflow: "hidden",
    },
    scrollViewContainerStyle: {
      height: _rulerHeight,
      alignItems: "center",
    },
    ruler: {
      flexDirection: "column",
    },
    spacer: {
      height: _spacerHeight,
    },
    segment: {
      height: _segmentHeight,
      width,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.sliderContainer}>
        <Animated.ScrollView
          ref={scrollViewRef}
          vertical
          contentContainerStyle={styles.scrollViewContainerStyle}
          bounces={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToInterval={_snapSegment}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            {
              useNativeDriver: true,
            }
          )}>
          <View style={styles.ruler}>
            <View style={styles.spacer} />
            {data.map((i) => (
              <View
                key={i}
                style={[
                  styles.segment,
                  {
                    marginBottom: i === data.length - 1 ? 0 : _segmentSpacing,
                  },
                ]}>
                <Body>{i}</Body>
              </View>
            ))}
            <View style={styles.spacer} />
          </View>
        </Animated.ScrollView>
      </SafeAreaView>

      <View style={styles.selectorContainer}>
        <View style={styles.selector} />
      </View>
    </View>
  );
};

export default VerticaSlider;

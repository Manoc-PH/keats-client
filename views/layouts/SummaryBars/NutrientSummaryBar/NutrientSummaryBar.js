import { View } from "react-native";

import {
  FONT_SIZES,
  NUTRIENT_COLOR_MAPPING,
  SPACING,
} from "@app/common/constants/styles";

import {
  HorizontalProgressBar,
  Caption1,
  TextSkeleton,
  Body,
} from "@app/views/components";
import { styles } from "./styles";
import { useEffect, useState } from "react";

export default function NutrientSummaryBar(props) {
  const { macros, loading } = props;

  // Local states
  const [macroState, setMacroState] = useState([
    { label: "calories", value: 0, valueMax: 0, amountUnit: "" },
    { label: "protein", value: 0, valueMax: 0, amountUnit: "g" },
    { label: "fats", value: 0, valueMax: 0, amountUnit: "g" },
    { label: "carbs", value: 0, valueMax: 0, amountUnit: "g" },
  ]);

  // UseEffects
  useEffect(() => {
    if (macros) setMacroState(macros);
  }, [macros]);

  return (
    <View style={styles.wrapper}>
      {macroState &&
        macroState.map((item, i) => (
          <View
            key={item.label}
            style={{
              ...styles.rowContainer,
              marginRight: i === macroState.length - 1 ? 0 : SPACING.Medium,
            }}>
            {loading ? (
              <TextSkeleton />
            ) : (
              <View style={styles.valueContainer}>
                <Body style={styles.body}>{Math.floor(item.value)}</Body>
                <Caption1
                  style={styles.subheadline}>{` ${item.amountUnit}`}</Caption1>
              </View>
            )}
            <View style={styles.barContainer}>
              <HorizontalProgressBar
                progress={(item.total / item.valueMax) * 100}
                foregroundColor={NUTRIENT_COLOR_MAPPING[item.label]}
                backgroundColor={`${NUTRIENT_COLOR_MAPPING[item.label]}25`}
              />
            </View>
            {loading ? (
              <TextSkeleton
                fontSize={FONT_SIZES.Tiny}
                style={{ width: "50%" }}
              />
            ) : (
              <View style={styles.valueContainer}>
                <Caption1 style={styles.subheadline}>{item.label}</Caption1>
              </View>
            )}
          </View>
        ))}
    </View>
  );
}

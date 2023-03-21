import { View } from "react-native";

import {
  FONT_SIZES,
  NUTRIENT_COLOR_MAPPING,
} from "@app/common/constants/styles";

import {
  HorizontalProgressBar,
  Caption1,
  Title2,
  Headline,
  TextSkeleton,
} from "@app/views/components";
import { styles } from "./styles";
import { useEffect, useState } from "react";

export default function NutrientSummaryBars(props) {
  const { macros, loading } = props;

  // Local states
  const [macroState, setMacroState] = useState([
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
              marginRight: i === macroState.length - 1 ? 0 : 20,
            }}>
            {loading ? (
              <TextSkeleton />
            ) : (
              <View style={styles.valueContainer}>
                <Headline>{Math.floor(item.value)}</Headline>
                <Caption1 style={styles.body}>
                  {` / ${Math.floor(item.valueMax)} ${item.amountUnit}`}
                </Caption1>
              </View>
            )}
            <View style={styles.barContainer}>
              <HorizontalProgressBar
                progress={(item.value / item.valueMax) * 100}
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
                <Caption1 style={styles.body}>{item.label}</Caption1>
              </View>
            )}
          </View>
        ))}
    </View>
  );
}

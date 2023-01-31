import { NUTRIENT_COLOR_MAPPING } from "@app/common/constants/styles";
import { BodyText, HorizontalProgressBar } from "@app/views/components";
import { View } from "react-native";
import { styles } from "./styles";

export default function MacroSummaryBars(props) {
  const { macros } = props;
  const dummy_macros = [
    { label: "protein", value: 60, valueMax: 100, amountUnit: "g" },
    { label: "fats", value: 10, valueMax: 60, amountUnit: "g" },
    { label: "carbs", value: 50, valueMax: 200, amountUnit: "g" },
    // { label: "calories", value: 50, valueMax: 200 },
  ];
  return (
    <View style={styles.wrapper}>
      {dummy_macros.map((item) => (
        <View key={item.label} style={styles.rowContainer}>
          <View style={styles.valueContainer}>
            <BodyText style={styles.title}>{item.value}</BodyText>
            <BodyText style={styles.subtitle}>
              {` / ${item.valueMax} ${item.amountUnit}`}
            </BodyText>
          </View>
          <View style={styles.barContainer}>
            <HorizontalProgressBar
              progress={(item.value / item.valueMax) * 100}
              foregroundColor={NUTRIENT_COLOR_MAPPING[item.label]}
              backgroundColor={`${NUTRIENT_COLOR_MAPPING[item.label]}25`}
            />
          </View>
          <View style={styles.valueContainer}>
            <BodyText style={styles.subtitle}>{item.label}</BodyText>
          </View>
        </View>
      ))}
    </View>
  );
}

import { NUTRIENT_COLOR_MAPPING } from "@app/common/constants/styles";
import { HorizontalProgressBar, Caption1, Title2 } from "@app/views/components";
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
      {dummy_macros.map((item, i) => (
        <View
          key={item.label}
          style={{
            ...styles.rowContainer,
            marginRight: i === dummy_macros.length - 1 ? 0 : 20,
          }}>
          <View style={styles.valueContainer}>
            <Title2>{item.value}</Title2>
            <Caption1 style={styles.body}>
              {` / ${item.valueMax} ${item.amountUnit}`}
            </Caption1>
          </View>
          <View style={styles.barContainer}>
            <HorizontalProgressBar
              progress={(item.value / item.valueMax) * 100}
              foregroundColor={NUTRIENT_COLOR_MAPPING[item.label]}
              backgroundColor={`${NUTRIENT_COLOR_MAPPING[item.label]}25`}
            />
          </View>
          <View style={styles.valueContainer}>
            <Caption1 style={styles.body}>{item.label}</Caption1>
          </View>
        </View>
      ))}
    </View>
  );
}

import { View } from "react-native";

import { styles } from "./styles";
import { NutrientSummary } from "@app/views/layouts";

export default function Home() {
  return (
    <View style={styles.wrapper}>
      <NutrientSummary />
    </View>
  );
}

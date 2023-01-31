import { View } from "react-native";

import { styles } from "./styles";
import { CalorieSummaryBar } from "@app/views/layouts";

export default function Home() {
  return (
    <View style={styles.wrapper}>
      <CalorieSummaryBar></CalorieSummaryBar>
    </View>
  );
}

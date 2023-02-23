import { ScrollView, View } from "react-native";

import { styles } from "./styles";
import {
  NutrientSummary,
  CurrentDietCard,
  CalorieGoalProgress,
  HomeSearchModal,
} from "@app/views/layouts";

export default function Home() {
  return (
    <>
      <ScrollView
        style={styles.wrapper}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "start",
        }}>
        <View style={styles.container}>
          <NutrientSummary />
          <CurrentDietCard />
          <CalorieGoalProgress />
        </View>
      </ScrollView>
      {/* MODALS */}
      <HomeSearchModal />
    </>
  );
}

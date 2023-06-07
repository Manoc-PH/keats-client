import { View } from "react-native";

// Layouts
import { AddIntakeSearchbar } from "@app/views/layouts";

import { styles } from "./styles";

export default function AddIntake() {
  return (
    <View style={styles.container}>
      <AddIntakeSearchbar />
    </View>
  );
}

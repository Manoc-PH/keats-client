import { Text, View } from "react-native";
import { CircularProgressBar } from "../../../components";

import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <CircularProgressBar>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 40, fontWeight: "600" }}>1902</Text>
          <Text style={{ fontWeight: "200" }}>of 2510 Calories</Text>
        </View>
      </CircularProgressBar>
    </View>
  );
}

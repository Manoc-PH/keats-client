import { View } from "react-native";
import { CircularProgressBar, Txt } from "../../../components";

import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <CircularProgressBar>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Txt>1902</Txt>
          <Txt style={{ fontWeight: "200" }}>of 2510 Calories</Txt>
        </View>
      </CircularProgressBar>
    </View>
  );
}

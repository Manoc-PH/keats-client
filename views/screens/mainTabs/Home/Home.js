import { View } from "react-native";

import { styles } from "./styles";
import { Txt, CircularProgressBar } from "@app/views/components";
import { FONT_SIZES, FONT_WEIGHTS } from "@app/common/constants/styles";

export default function App() {
  return (
    <View style={styles.wrapper}>
      <CircularProgressBar>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Txt
            style={{
              marginBottom: 5,
              fontSize: FONT_SIZES.Huge,
              fontWeight: FONT_WEIGHTS.Bold,
            }}>
            1902
          </Txt>
          <Txt
            style={{
              fontWeight: FONT_WEIGHTS.Light,
            }}>
            of 2510 Calories
          </Txt>
        </View>
      </CircularProgressBar>
    </View>
  );
}

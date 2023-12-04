import { Text, View } from "react-native";

// Layouts
import { ScrollPage } from "@app/views/layouts";

// Styles
import { styles } from "./styles";

export default function Recipes() {
  return (
    <ScrollPage>
      <View style={styles.wrapper}>
        <Text>Coming soon</Text>
      </View>
    </ScrollPage>
  );
}

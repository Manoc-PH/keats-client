import { Text, View } from "react-native";
import { useSelector } from "react-redux";

// Layouts
import { ScrollPage } from "@app/views/layouts";

// Styles
import { styles } from "./styles";

export default function Recipes() {
  // Store State
  const { recipeSearch } = useSelector((state) => state.search);
  console.log(recipeSearch);
  return (
    <ScrollPage>
      <View style={styles.wrapper}>
        <Text>Coming soon</Text>
      </View>
    </ScrollPage>
  );
}

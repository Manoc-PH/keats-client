import { useState } from "react";
import { Dimensions, View } from "react-native";
// Constants
import { SPACING } from "@app/common/constants/styles";
// Icons
import {} from "@app/assets/icons";
// Components
import { SwitchButton } from "@app/views/components";

import { styles } from "./styles";

export default function RecipeInfo(props) {
  // Props
  const {} = props;
  const [activeDetail, setActiveDetail] = useState("Reviews");
  // Functions
  function handleSwitchView(value) {
    if (value === 1) setActiveDetail("Reviews");
    if (value === 2) setActiveDetail("Ingredients");
    if (value === 3) setActiveDetail("Instructions");
  }
  return (
    <View style={styles.wrapper}>
      <SwitchButton
        onValueChange={handleSwitchView}
        switchWidth={
          Dimensions.get("window").width - SPACING.Medium - SPACING.Medium
        }
        options={["Reviews", "Ingredients", "Instructions"]}
      />
    </View>
  );
}

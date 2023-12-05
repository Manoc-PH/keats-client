import { useState } from "react";
import { Dimensions, View } from "react-native";
import { useSelector } from "react-redux";

// Layouts
import { ScrollPage } from "@app/views/layouts";
// Components
import { Button, SubHeadline2, SwitchButton } from "@app/views/components";
// Constants
import { BTN_VARIANTS, SIZES, SPACING } from "@app/common/constants/styles";
// Images
import { AdImage } from "@app/assets/images";
// Styles
import { styles } from "./styles";

export default function Recipes() {
  // Store State
  const { recipeSearch } = useSelector((state) => state.search);
  console.log(recipeSearch);

  // Local States
  const [page, setPage] = useState("Discover");

  // Functions
  function handleSwitchView(value) {
    if (value === 1) setPage("Discover");
    if (value === 2) setPage("MyRecipes");
  }
  return (
    <ScrollPage>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <AdImage style={styles.image} resizeMode={"cover"} />
        </View>
        <View style={styles.container}>
          <SwitchButton
            onValueChange={handleSwitchView}
            switchWidth={
              Dimensions.get("window").width - SPACING.Medium - SPACING.Medium
            }
            text1={"Discover"}
            text2={"My Recipes"}
          />
        </View>
      </View>
    </ScrollPage>
  );
}

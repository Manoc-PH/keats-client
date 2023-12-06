import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
// Constants
import { SPACING } from "@app/common/constants/styles";
// Icons
import {} from "@app/assets/icons";
// Components
import { SwitchButton } from "@app/views/components";
// Hooks
import { useGetRecipeReviews } from "@app/core/hooks/api";

import { styles } from "./styles";

export default function RecipeInfo(props) {
  // Props
  const { RecipeID } = props;
  const [activeInfo, setActiveInfo] = useState("Reviews");
  const [infoSet, setInfoSet] = useState([]);

  // Hooks
  const { getRecipeReviews, getRecipeReviewsData, isGetRecipeReviewsLoading } =
    useGetRecipeReviews();

  // Functions
  function handleSwitchView(value) {
    if (value === 1) setActiveInfo("Reviews");
    if (value === 2) setActiveInfo("Ingredients");
    if (value === 3) setActiveInfo("Instructions");
  }
  function handleSwitchInfo() {}

  // UseEffects
  useEffect(() => {
    getRecipeReviews({ recipe_id: RecipeID });
  }, [RecipeID]);
  useEffect(() => {
    handleSwitchInfo();
  }, [activeInfo]);
  return (
    <View style={styles.wrapper}>
      <SwitchButton
        onValueChange={handleSwitchView}
        switchWidth={
          Dimensions.get("window").width - SPACING.Medium - SPACING.Medium
        }
        options={["Reviews", "Ingredients", "Instructions"]}
      />
      {activeInfo === "Reviews" && <View></View>}
      {activeInfo === "Ingredients" && <View></View>}
      {activeInfo === "Instructions" && <View></View>}
    </View>
  );
}

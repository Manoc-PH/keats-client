import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
// Constants
import { SPACING } from "@app/common/constants/styles";
// Components
import { Button, SwitchButton } from "@app/views/components";
// Layouts
import RecipeIngredientCard from "@app/views/layouts/Cards/RecipeIngredientCard";
import RecipeInstructionCard from "@app/views/layouts/Cards/RecipeInstructionCard";
// Hooks
import {
  useGetRecipeReviews,
  useGetRecipeIngredients,
  useGetRecipeInstructions,
} from "@app/core/hooks/api";

import { styles } from "./styles";

export default function RecipeInfoForm(props) {
  // Props
  const { RecipeID } = props;

  // Local State
  const [activeInfo, setActiveInfo] = useState("Ingredients");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  // Store State
  const { recipeIngredient } = useSelector((state) => state.recipe);

  // Hooks
  const navigation = useNavigation();

  // Functions
  function handleSwitchView(value) {
    if (value === 1) setActiveInfo("Ingredients");
    if (value === 2) setActiveInfo("Instructions");
    if (value === 3) setActiveInfo("Images");
  }
  function handleAddIngredient() {
    navigation.navigate("Common", { screen: "SearchRecipeIngredient" });
  }

  // UseEffects
  useEffect(() => {
    // setIngredients(recipeIngredients);
  }, [recipeIngredient]);
  return (
    <View style={styles.wrapper}>
      <SwitchButton
        onValueChange={handleSwitchView}
        switchWidth={
          Dimensions.get("window").width - SPACING.Medium - SPACING.Medium
        }
        options={["Ingredients", "Instructions", "Images"]}
      />
      {activeInfo === "Ingredients" && (
        <View>
          <Button onPress={handleAddIngredient}>Add Ingredient</Button>
          {ingredients?.length > 0 &&
            ingredients.map((item) => (
              <RecipeIngredientCard
                key={item.id}
                name={item.name}
                name_owner={item.name_owner}
                calories={item.calories}
                amount={item.amount}
              />
            ))}
        </View>
      )}
      {activeInfo === "Instructions" &&
        steps &&
        steps?.length > 0 &&
        steps.map((item) => (
          <RecipeInstructionCard
            key={item.id}
            description={item.instruction_description}
            order={item.step_num}
          />
        ))}
      {activeInfo === "Images" && <View></View>}
    </View>
  );
}

import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
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
import { actions } from "@app/core/store";

export default function RecipeInfoForm(props) {
  // Props
  const { RecipeID } = props;

  // Local State
  const [activeInfo, setActiveInfo] = useState("Ingredients");
  const [ingredientMapping, setIngredientMapping] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  // Store State
  const { recipeIngredient } = useSelector((state) => state.recipe);

  // Store Actions
  const { setRecipeIngredient: sri } = actions;
  const dispatch = useDispatch();
  const setRecipeIngredient = (v) => dispatch(sri(v));

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
  function handleSavedIngredient(value) {
    if (value?.ingredient_mapping_id) {
      if (!ingredientMapping?.[value?.ingredient_mapping_id]) {
        setIngredientMapping({
          ...ingredientMapping,
          [value?.ingredient_mapping_id]: value,
        });
      } else {
        newIng = { ...value };
        oldIng = { ...ingredientMapping?.[value?.ingredient_mapping_id] };
        newIng.calories = newIng.calories + oldIng.calories;
        newIng.amount = newIng.amount + oldIng.amount;
        setIngredientMapping({
          ...ingredientMapping,
          [value?.ingredient_mapping_id]: newIng,
        });
      }
      setRecipeIngredient();
    }
  }
  function handleMapping() {
    if (ingredientMapping) {
      const newIngredients = [];
      Object.keys(ingredientMapping).forEach(function (key) {
        newIngredients.push(ingredientMapping[key]);
      });
      setIngredients(newIngredients);
    }
  }

  // UseEffects
  useEffect(() => {
    handleSavedIngredient(recipeIngredient);
  }, [recipeIngredient]);
  useEffect(() => {
    handleMapping();
  }, [ingredientMapping]);
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
          <Button
            style={{ marginBottom: SPACING.Tiny }}
            onPress={handleAddIngredient}>
            Add Ingredient
          </Button>
          {ingredients?.length > 0 &&
            ingredients.map((item) => (
              <RecipeIngredientCard
                key={item.id || item?.ingredient_mapping_id}
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

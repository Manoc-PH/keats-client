import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";
import { manipulateAsync, SaveFormat } from "expo-image-manipulator";
// Theme
import themeColors from "@app/common/theme";
// Constants
import { BTN_VARIANTS, SIZES, SPACING } from "@app/common/constants/styles";
// Components
import { Button, Image, SwitchButton } from "@app/views/components";
// Layouts
import RecipeIngredientCard from "@app/views/layouts/Cards/RecipeIngredientCard";
import RecipeInstructionCard from "@app/views/layouts/Cards/RecipeInstructionCard";

import { styles } from "./styles";
import { actions } from "@app/core/store";

export default function EditRecipeInfoForm(props) {
  // Props
  const {
    setRecipeIngredients,
    setRecipeInstructions,
    recipeIngredients,
    recipeInstructions,
  } = props;

  // Local State
  const [activeInfo, setActiveInfo] = useState("Ingredients");
  const [ingredientMapping, setIngredientMapping] = useState();
  const [ingredients, setIngredients] = useState(recipeIngredients || []);
  const [recipeToUpdate, setRecipeToUpdate] = useState();
  const [steps, setSteps] = useState(recipeInstructions || []);

  // Store State
  const { recipeIngredient } = useSelector((state) => state.recipe);

  // Store Actions
  const {
    setRecipeIngredient: sri,
    setSelectedIngredientAmount: sfa,
    setSelectedIngredientMappingID: sMId,
  } = actions;
  const dispatch = useDispatch();
  const setRecipeIngredient = (v) => dispatch(sri(v));
  const setSelectedIngredientAmount = (value) => dispatch(sfa(value));
  const setSelectedIngredientMappingID = (v) => dispatch(sMId(v));

  // Hooks
  const navigation = useNavigation();

  // Functions
  function handleSwitchView(value) {
    if (value === 1) setActiveInfo("Ingredients");
    if (value === 2) setActiveInfo("Instructions");
  }
  function handleAddIngredient() {
    navigation.navigate("Common", { screen: "SearchRecipeIngredient" });
  }
  function handleInitialIngredients() {
    let newMapping = {};
    recipeIngredients.forEach((value) => {
      if (value?.ingredient_mapping_id) {
        newMapping = { ...newMapping, [value?.ingredient_mapping_id]: value };
      } else if (value?.food_id) {
      }
    });
    setIngredientMapping(newMapping);
  }

  function handleSavedIngredient(value) {
    if (value?.ingredient_mapping_id) {
      if (recipeToUpdate) {
        const newMapping = {
          ...ingredientMapping,
          [recipeToUpdate?.ingredient_mapping_id]: undefined,
        };
        newMapping[value?.ingredient_mapping_id] = {
          ...newMapping[value?.ingredient_mapping_id],
          ...value,
        };
        setIngredientMapping(newMapping);
        setRecipeToUpdate();
      } else if (!ingredientMapping?.[value?.ingredient_mapping_id]) {
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
    } else if (value?.food_id) {
    }
  }
  function handleMapping() {
    if (ingredientMapping) {
      const newIngredients = [];
      Object.keys(ingredientMapping).forEach(function (key) {
        if (ingredientMapping[key]) newIngredients.push(ingredientMapping[key]);
      });
      setIngredients(newIngredients);
    }
  }
  function handleIngredientPressed(item) {
    const { amount, ingredient_mapping_id } = item;
    setSelectedIngredientAmount(amount);
    if (ingredient_mapping_id) {
      setSelectedIngredientMappingID(ingredient_mapping_id);
      setRecipeToUpdate(item);
      navigation.navigate("Common", { screen: "RecipeIngredientDetails" });
    }
  }
  function handleAddInstruction() {
    setSteps([
      ...steps,
      { step_num: steps.length + 1, instruction_description: "" },
    ]);
  }
  function handleInstructionChange(i, value) {
    const newSteps = steps;
    newSteps[i].instruction_description = value;
    setSteps(newSteps);
  }
  async function pickImageAsync() {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const manipResult = await manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 500 } }],
        { compress: 0.5, format: SaveFormat.JPEG }
      );
      setSelectedImages([
        ...selectedImages,
        { recipe_id: "", name_url_local: manipResult.uri },
      ]);
    } else {
      alert("You did not select any image.");
    }
  }
  // UseEffects
  useEffect(() => {
    handleSavedIngredient(recipeIngredient);
  }, [recipeIngredient]);
  useEffect(() => {
    handleMapping();
  }, [ingredientMapping]);
  useEffect(() => {
    setRecipeIngredients(ingredients);
  }, [ingredients]);
  useEffect(() => {
    setRecipeInstructions(steps);
  }, [steps]);
  useEffect(() => {
    handleInitialIngredients();
  }, []);
  return (
    <View style={styles.wrapper}>
      <SwitchButton
        onValueChange={handleSwitchView}
        switchWidth={
          Dimensions.get("window").width - SPACING.Medium - SPACING.Medium
        }
        options={["Ingredients", "Instructions"]}
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
                onPress={() => handleIngredientPressed(item)}
              />
            ))}
        </View>
      )}
      {activeInfo === "Instructions" && (
        <View>
          <Button
            style={{ marginBottom: SPACING.Tiny }}
            onPress={handleAddInstruction}>
            Add Instruction
          </Button>
          {steps &&
            steps?.length > 0 &&
            steps.map((item, i) => (
              <RecipeInstructionCard
                key={i}
                order={item.step_num}
                editable
                description={steps[i].instruction_description}
                onChange={(v) => handleInstructionChange(i, v)}
              />
            ))}
        </View>
      )}
    </View>
  );
}

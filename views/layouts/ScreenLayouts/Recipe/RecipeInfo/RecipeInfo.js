import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { useSelector } from "react-redux";
// Constants
import { SPACING } from "@app/common/constants/styles";
// Components
import { SwitchButton } from "@app/views/components";
// Layouts
import ReviewCard from "@app/views/layouts/Cards/ReviewCard";
import RecipeIngredientCard from "@app/views/layouts/Cards/RecipeIngredientCard";
import RecipeInstructionCard from "@app/views/layouts/Cards/RecipeInstructionCard";
// Hooks
import {
  useGetRecipeReviews,
  useGetRecipeIngredients,
  useGetRecipeInstructions,
} from "@app/core/hooks/api";

import { styles } from "./styles";

export default function RecipeInfo(props) {
  // Props
  const { RecipeID, isRecipeUpdated } = props;
  const [activeInfo, setActiveInfo] = useState("Reviews");
  const [infoSet, setInfoSet] = useState([]);

  // Hooks
  const { getRecipeReviews, getRecipeReviewsData, isGetRecipeReviewsLoading } =
    useGetRecipeReviews();
  const {
    getRecipeIngredients,
    getRecipeIngredientsData,
    isGetRecipeIngredientsLoading,
  } = useGetRecipeIngredients();
  const {
    getRecipeInstructions,
    getRecipeInstructionsData,
    isGetRecipeInstructionsLoading,
  } = useGetRecipeInstructions();

  // Functions
  function handleSwitchView(value) {
    setInfoSet([]);
    if (value === 1) setActiveInfo("Reviews");
    if (value === 2) setActiveInfo("Ingredients");
    if (value === 3) setActiveInfo("Instructions");
  }
  function handleSwitchInfo(value) {
    if (value === "Reviews") getRecipeReviews({ recipe_id: RecipeID });
    if (value === "Ingredients") getRecipeIngredients({ recipe_id: RecipeID });
    if (value === "Instructions")
      getRecipeInstructions({ recipe_id: RecipeID });
  }

  // UseEffects
  useEffect(() => {
    if (RecipeID) handleSwitchInfo(activeInfo);
  }, [activeInfo, RecipeID]);
  useEffect(() => {
    if (isRecipeUpdated) handleSwitchInfo(activeInfo);
  }, [isRecipeUpdated]);
  useEffect(() => {
    if (getRecipeReviewsData?.reviews?.length > 0) {
      setInfoSet(getRecipeReviewsData.reviews);
    }
  }, [getRecipeReviewsData]);
  useEffect(() => {
    if (getRecipeIngredientsData?.ingredients?.length > 0) {
      setInfoSet(getRecipeIngredientsData.ingredients);
    }
  }, [getRecipeIngredientsData]);
  useEffect(() => {
    if (getRecipeInstructionsData?.instructions?.length > 0) {
      setInfoSet(getRecipeInstructionsData.instructions);
    }
  }, [getRecipeInstructionsData]);
  return (
    <View style={styles.wrapper}>
      <SwitchButton
        onValueChange={handleSwitchView}
        switchWidth={
          Dimensions.get("window").width - SPACING.Medium - SPACING.Medium
        }
        options={["Reviews", "Ingredients", "Instructions"]}
      />
      {activeInfo === "Reviews" && (
        <View>
          {isGetRecipeReviewsLoading && (
            <>
              <ReviewCard isLoading />
              <ReviewCard isLoading />
              <ReviewCard isLoading />
            </>
          )}
          {infoSet &&
            !isGetRecipeReviewsLoading &&
            infoSet.map((item) => (
              <ReviewCard
                key={item.id}
                name={item.name_owner}
                rating={item.rating}
                description={item.description}
                date_created={item.date_created}
              />
            ))}
        </View>
      )}
      {activeInfo === "Ingredients" && (
        <View>
          {isGetRecipeIngredientsLoading && (
            <>
              <RecipeIngredientCard isLoading />
              <RecipeIngredientCard isLoading />
              <RecipeIngredientCard isLoading />
            </>
          )}
          {infoSet &&
            !isGetRecipeIngredientsLoading &&
            infoSet.map((item) => (
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
      {activeInfo === "Instructions" && (
        <View>
          {isGetRecipeInstructionsLoading && (
            <>
              <RecipeInstructionCard isLoading />
              <RecipeInstructionCard isLoading />
              <RecipeInstructionCard isLoading />
            </>
          )}
          {infoSet &&
            !isGetRecipeInstructionsLoading &&
            infoSet.map((item) => (
              <RecipeInstructionCard
                key={item.id}
                description={item.instruction_description}
                order={item.step_num}
              />
            ))}
        </View>
      )}
    </View>
  );
}

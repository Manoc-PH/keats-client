import { ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";

// Hooks
import { useGetIngredientDetails } from "@app/core/hooks/api";

// Layouts
import {
  NutrientSummary,
  CurrentDietCard,
  CalorieGoalProgress,
  ScrollPage,
  FoodName,
  ConsumeFoodFooter,
} from "@app/views/layouts";

// Components
import { Image } from "@app/views/components";

import { styles } from "./styles";

export default function FoodDetails() {
  // Store State
  const { dailyNutrients } = useSelector((state) => state.tracker);
  const { foodDetails, selectedFoodID, selectedFoodAmount } = useSelector(
    (state) => state.food
  );

  // Store Actions
  const { setIngredientDetails: setFoodDetail } = actions;
  const dispatch = useDispatch();
  const setFoodDetails = (v) => dispatch(setFoodDetail(v));

  // Hooks
  const {
    getFoodDetails,
    getFoodDetailsData,
    isGetFoodDetailsLoading,
    isGetFoodDetailsSuccess,
  } = useGetIngredientDetails();

  useEffect(() => {
    if (selectedFoodID) {
      if (!foodDetails || foodDetails?.id !== selectedFoodID)
        getFoodDetails(selectedFoodID);
    }
  }, [selectedFoodID]);
  useEffect(() => {
    if (isGetFoodDetailsSuccess) setFoodDetails(getFoodDetailsData);
  }, [getFoodDetailsData]);
  return (
    <>
      <ScrollPage style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          {/* TODO Add proper images, not just the thumbnail */}
          <Image src={foodDetails?.thumbnail_image_link} />
        </View>
        <View style={styles.container}>
          <FoodName foodDetails={foodDetails} />
          <NutrientSummary
            dailyNutrients={dailyNutrients}
            foodDetails={foodDetails}
            selectedFoodAmount={selectedFoodAmount}
          />
        </View>
      </ScrollPage>
      <ConsumeFoodFooter />
    </>
  );
}

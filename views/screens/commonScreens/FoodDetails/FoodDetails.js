import { ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";

// Hooks
import { useGetFoodDetails } from "@app/core/hooks/api";

// Layouts
import {
  NutrientSummary,
  CurrentDietCard,
  CalorieGoalProgress,
  ScrollPage,
  FoodName,
} from "@app/views/layouts";

import { styles } from "./styles";

export default function FoodDetails() {
  // Store State
  const { foodDetails, selectedFoodID } = useSelector((state) => state.food);

  // Store Actions
  const { setFoodDetails: setFoodDetail } = actions;
  const dispatch = useDispatch();
  const setFoodDetails = (v) => dispatch(setFoodDetail(v));

  // Hooks
  const {
    getFoodDetails,
    getFoodDetailsData,
    isGetFoodDetailsLoading,
    isGetFoodDetailsSuccess,
  } = useGetFoodDetails();

  useEffect(() => {
    if (selectedFoodID) {
      if (!foodDetails || foodDetails?.id !== selectedFoodID)
        getFoodDetails(selectedFoodID);
    }
  }, [selectedFoodID]);
  useEffect(() => {
    console.log(getFoodDetailsData);
    if (isGetFoodDetailsSuccess) setFoodDetails(getFoodDetailsData);
  }, [getFoodDetailsData]);
  return (
    <>
      <ScrollPage style={styles.wrapper}>
        <View style={styles.imageWrapper}></View>
        <View style={styles.container}>
          <FoodName />
          <NutrientSummary />
        </View>
      </ScrollPage>
    </>
  );
}

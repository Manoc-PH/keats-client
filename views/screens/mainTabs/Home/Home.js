import { ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";

import { styles } from "./styles";
import {
  NutrientSummary,
  CurrentDietCard,
  CalorieGoalProgress,
  HomeSearchModal,
  Loader,
} from "@app/views/layouts";

// Hooks
import { useGetDailyNutrients } from "@app/core/hooks/api";

export default function Home() {
  // Store State
  const { dailyNutrients } = useSelector((state) => state.tracker);

  // Store Actions
  const { setDailyNutrients: setDailyNutrientsState } = actions;
  const dispatch = useDispatch();
  const setDailyNutrients = (v) => dispatch(setDailyNutrientsState(v));

  // Hooks
  const {
    getDailyNutrients,
    getDailyNutrientsData,
    isGetDailyNutrientsLoading,
    isGetDailyNutrientsSuccess,
  } = useGetDailyNutrients();

  useEffect(() => {
    if (!dailyNutrients) getDailyNutrients();
  }, []);
  useEffect(() => {
    if (isGetDailyNutrientsSuccess) setDailyNutrients(getDailyNutrientsData);
  }, [getDailyNutrientsData]);
  return (
    <>
      <ScrollView
        style={styles.wrapper}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "flex-start",
        }}>
        <View style={styles.container}>
          {isGetDailyNutrientsLoading && <Loader />}
          {/* TODO ADD PROPER LOADER FOR NUTRIENT SUMMARY */}
          {!isGetDailyNutrientsLoading && <NutrientSummary />}
          <CurrentDietCard />
          <CalorieGoalProgress />
        </View>
      </ScrollView>
      {/* MODALS */}
      <HomeSearchModal />
    </>
  );
}

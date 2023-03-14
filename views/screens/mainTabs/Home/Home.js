import { ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";

import { styles } from "./styles";
import {
  MacroSummary,
  CurrentDietCard,
  CalorieGoalProgress,
  HomeSearchModal,
  Loader,
  ScrollPage,
} from "@app/views/layouts";

// Hooks
import { useGetDailyNutrients, useGetAccountVitals } from "@app/core/hooks/api";

export default function Home() {
  // Store State
  const { dailyNutrients } = useSelector((state) => state.tracker);
  const { accountVitals } = useSelector((state) => state.account);

  // Store Actions
  const {
    setDailyNutrients: setDailyNutrientsState,
    setAccountVitals: setAccountVitalsState,
  } = actions;
  const dispatch = useDispatch();
  const setDailyNutrients = (v) => dispatch(setDailyNutrientsState(v));
  const setAccountVitals = (v) => dispatch(setAccountVitalsState(v));

  // Hooks
  const {
    getDailyNutrients,
    getDailyNutrientsData,
    isGetDailyNutrientsLoading,
    isGetDailyNutrientsSuccess,
  } = useGetDailyNutrients();
  const {
    getAccountVitals,
    getAccountVitalsData,
    isGetAccountVitalsLoading,
    isGetAccountVitalsSuccess,
  } = useGetAccountVitals();

  useEffect(() => {
    if (!dailyNutrients) getDailyNutrients();
    if (!accountVitals) getAccountVitals();
  }, []);
  useEffect(() => {
    if (isGetDailyNutrientsSuccess) setDailyNutrients(getDailyNutrientsData);
    if (isGetAccountVitalsSuccess) setAccountVitals(getAccountVitalsData);
  }, [getDailyNutrientsData, getAccountVitalsData]);
  return (
    <>
      <ScrollPage>
        <View style={styles.container}>
          <MacroSummary />
          <CurrentDietCard />
          <CalorieGoalProgress />
        </View>
      </ScrollPage>
      {/* MODALS */}
      <HomeSearchModal />
    </>
  );
}

import { ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";

import { styles } from "./styles";
import {
  MacroSummary,
  CalorieSummary,
  CurrentDietCard,
  CalorieGoalProgress,
  HomeSearchModal,
  Loader,
  ScrollPage,
} from "@app/views/layouts";

// Hooks
import { useGetDailyNutrients, useGetAccountVitals } from "@app/core/hooks/api";
import moment from "moment";

export default function Home() {
  // Store State
  const { dailyNutrients } = useSelector((state) => state.tracker);
  const { accountVitals } = useSelector((state) => state.account);

  // Store Actions
  const { setDailyNutrients: sdns, setAccountVitals: savs } = actions;
  const dispatch = useDispatch();
  const setDailyNutrients = (v) => dispatch(sdns(v));
  const setAccountVitals = (v) => dispatch(savs(v));

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
    if (!accountVitals) getAccountVitals();
    if (!dailyNutrients) {
      getDailyNutrients();
    } else if (dailyNutrients?.date_created) {
      if (!moment().isSame(moment(dailyNutrients?.date_created), "day")) {
        getDailyNutrients();
      }
    }
  }, []);
  useEffect(() => {
    if (isGetDailyNutrientsSuccess) setDailyNutrients(getDailyNutrientsData);
    if (isGetAccountVitalsSuccess) setAccountVitals(getAccountVitalsData);
  }, [getDailyNutrientsData, getAccountVitalsData]);
  return (
    <>
      <ScrollPage>
        <View style={styles.container}>
          <CalorieSummary dailyNutrients={dailyNutrients} />
          <MacroSummary dailyNutrients={dailyNutrients} />
          <CurrentDietCard accountVitals={accountVitals} />
          <CalorieGoalProgress />
        </View>
      </ScrollPage>
      {/* MODALS */}
      <HomeSearchModal />
    </>
  );
}

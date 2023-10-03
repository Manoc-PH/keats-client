import { Dimensions, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

// Store
import { actions } from "@app/core/store";
// Hooks
import { useGetDailyNutrients, useGetIntakes } from "@app/core/hooks/api";
// Constants
import { BTN_VARIANTS, SIZES, SPACING } from "@app/common/constants/styles";
// Layouts
import {
  MacroSummary,
  CalorieSummary,
  VitalsDietCard,
  CalorieGoalProgress,
  Loader,
  ScrollPage,
  PageDivider,
} from "@app/views/layouts";
// Components
import { Button, SubHeadline2, SwitchButton } from "@app/views/components";

import { styles } from "./styles";

export default function Home() {
  // Store State
  const { dailyNutrients, dailyIntakes } = useSelector(
    (state) => state.tracker
  );
  const { isViewSimple } = useSelector((state) => state.ui);

  // Store Actions
  const {
    setDailyIntakes: sdi,
    setDailyNutrients: sdns,
    setIsViewSimple: sivs,
    setIsProgressInfoModalVisible: sid,
  } = actions;
  const dispatch = useDispatch();
  const setDailyIntakes = (v) => dispatch(sdi(v));
  const setDailyNutrients = (v) => dispatch(sdns(v));
  const setIsViewSimple = (v) => dispatch(sivs(v));
  const setIsProgressInfoModalVisible = (value) => dispatch(sid(value));

  // Hooks
  const {
    getDailyNutrients,
    getDailyNutrientsData,
    isGetDailyNutrientsSuccess,
    // isGetDailyNutrientsLoading,
  } = useGetDailyNutrients();
  const {
    getIntakes,
    getIntakesData,
    isGetIntakesSuccess,
    // isGetIntakesLoading,
  } = useGetIntakes();

  // Functions
  function handleSwitchView(value) {
    if (value === 1) setIsViewSimple(true);
    if (value === 2) setIsViewSimple(false);
  }

  // Useffects
  useEffect(() => {
    if (!dailyIntakes) getIntakes();
    if (!dailyNutrients) {
      getDailyNutrients();
    } else if (dailyNutrients?.date_created) {
      if (
        !moment().isSame(
          moment(dailyNutrients?.date_created).format("YYYY-MM-DD"),
          moment().format("YYYY-MM-DD")
        )
      ) {
        getDailyNutrients();
        getIntakes();
      }
    }
  }, []);
  useEffect(() => {
    if (isGetDailyNutrientsSuccess) setDailyNutrients(getDailyNutrientsData);
    if (isGetIntakesSuccess) setDailyIntakes(getIntakesData);
  }, [getDailyNutrientsData, getIntakesData]);
  return (
    <>
      <ScrollPage>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <CalorieSummary
              isViewSimple={isViewSimple}
              dailyNutrients={dailyNutrients}
            />
            {isViewSimple && (
              <Button
                style={styles.btn}
                variant={BTN_VARIANTS.outlined}
                size={SIZES.Large}
                onPress={() => setIsProgressInfoModalVisible(true)}>
                ?
              </Button>
            )}
          </View>
          <PageDivider />
          <View style={styles.container}>
            <SwitchButton
              onValueChange={handleSwitchView}
              switchWidth={
                Dimensions.get("window").width - SPACING.Medium - SPACING.Medium
              }
              text1={"Simple View"}
              text2={"Advanced View"}
            />
            {!isViewSimple && (
              <>
                <View style={styles.spacer} />
                <MacroSummary dailyNutrients={dailyNutrients} />
              </>
            )}
            <View style={styles.spacer} />
            <SubHeadline2>How much I've tracked</SubHeadline2>
            <View style={styles.spacerSubheadline} />
            <CalorieGoalProgress />
          </View>
          <PageDivider />
        </View>
      </ScrollPage>
      {/* MODALS */}
    </>
  );
}

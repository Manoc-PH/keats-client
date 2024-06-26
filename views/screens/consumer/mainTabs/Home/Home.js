import { Dimensions, View } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

// Store
import { actions } from "@app/core/store";
// Hooks
import { useGetDailyNutrients, useGetIntakes } from "@app/core/hooks/api";
// Constants
import { BTN_VARIANTS, SIZES, SPACING } from "@app/common/constants/styles";
import { INTAKE_SUMMARY_TYPES } from "@app/common/constants/options";

// Layouts
import {
  MacroSummary,
  CalorieSummary,
  CalorieGoalProgress,
  ScrollPage,
  PageDivider,
  IntakeSummaryBar,
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
  const navigation = useNavigation();

  // Functions
  function handleSwitchView(value) {
    if (value === 1) setIsViewSimple(true);
    if (value === 2) setIsViewSimple(false);
  }
  function openInsightsScreen() {
    navigation.navigate("Insights");
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
            options={["Simple View", "Advanced View"]}
          />
          {!isViewSimple && (
            <>
              <View style={styles.spacer} />
              <MacroSummary dailyNutrients={dailyNutrients} />
            </>
          )}
          {/* Insights */}
          <View style={styles.spacer} />
          <SubHeadline2>How much I've tracked</SubHeadline2>
          <View style={styles.spacerSubheadline} />
          <IntakeSummaryBar type={INTAKE_SUMMARY_TYPES.weekly} />
          <View style={styles.spacer} />
          {/* TODO FINISH CALORIE GOAL PROGRESS */}
          {/* <CalorieGoalProgress /> */}
          <Button
            variant={BTN_VARIANTS.outlined}
            style={styles.wideBtn}
            onPress={openInsightsScreen}>
            Know More
          </Button>
        </View>
      </View>
    </ScrollPage>
  );
}

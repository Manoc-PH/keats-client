import React, { useEffect, useState } from "react";
import { View } from "react-native";
import moment from "moment";

// Constants
import { INTAKE_SUMMARY_TYPES, WEEK_DAYS } from "@app/common/constants/options";
import { FONT_SIZES } from "@app/common/constants/styles";

// Hooks
import { useGetDailyNutrientsList } from "@app/core/hooks/api";

// Components
import { CircleBar, SubHeadline2, TextSkeleton } from "@app/views/components";

import { styles } from "./styles";
export default function IntakeSummaryBar(props) {
  // Destructure
  const { type } = props;

  // Local states
  const [weekDates, setWeekDates] = useState();
  const [nutrientSummary, setNutrientSummary] = useState();

  // Hooks
  const {
    getDailyNutrientsList,
    getDailyNutrientsListData,
    isGetDailyNutrientsListLoading,
  } = useGetDailyNutrientsList();
  // Functions
  function generateDatesForWeek() {
    const today = moment();
    const startOfWeek = today.clone().startOf("week");
    const endOfWeek = today.clone().endOf("week");
    const datesThisWeek = [];
    const currentDate = startOfWeek.clone();
    while (currentDate.isSameOrBefore(endOfWeek, "day")) {
      datesThisWeek.push(currentDate.format("YYYY-MM-DD"));
      currentDate.add(1, "day");
    }
    return datesThisWeek;
  }
  function formatNutrientSummary(data) {
    const summary = {};
    data.forEach((item) => {
      summary[moment(item?.date_created).format("YYYY-MM-DD")] = item;
    });
    setNutrientSummary(summary);
  }

  useEffect(() => {
    if (type === INTAKE_SUMMARY_TYPES.weekly) {
      const weeks = generateDatesForWeek();
      setWeekDates(weeks);
      getDailyNutrientsList({
        start_date: moment(weeks[0]).toISOString(),
        end_date: moment(weeks[weeks.length - 1]).toISOString(),
      });
    }
  }, []);
  useEffect(() => {
    if (getDailyNutrientsListData)
      formatNutrientSummary(getDailyNutrientsListData);
  }, [getDailyNutrientsListData]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        {WEEK_DAYS.map((item) => (
          <View key={item} style={styles.itemSpace}>
            {isGetDailyNutrientsListLoading || !nutrientSummary ? (
              <TextSkeleton
                style={{
                  width: styles.itemSpace.width * 0.7,
                  height: FONT_SIZES.Tiny,
                }}
                fontSize={FONT_SIZES.Small}></TextSkeleton>
            ) : (
              <SubHeadline2 style={styles.text}>{item}</SubHeadline2>
            )}
          </View>
        ))}
      </View>
      {type === INTAKE_SUMMARY_TYPES.weekly && (
        <View style={styles.dateContainer}>
          {weekDates &&
            weekDates.map((date) => (
              <View
                key={date}
                style={{ ...styles.barContainer, ...styles.itemSpace }}>
                {(isGetDailyNutrientsListLoading || !nutrientSummary) && (
                  <CircleBar progress={0} size={styles.itemSpace.width * 0.7}>
                    <TextSkeleton
                      style={{
                        width: styles.itemSpace.width * 0.35,
                        height: FONT_SIZES.Tiny * 0.7,
                      }}
                      fontSize={FONT_SIZES.Small}></TextSkeleton>
                  </CircleBar>
                )}
                {nutrientSummary && (
                  <CircleBar
                    progress={
                      (nutrientSummary[date]?.calories /
                        nutrientSummary[date]?.max_calories) *
                        100 || 0
                    }
                    size={styles.itemSpace.width * 0.7}>
                    <SubHeadline2>{moment(date).format("DD")}</SubHeadline2>
                  </CircleBar>
                )}
              </View>
            ))}
        </View>
      )}
    </View>
  );
}

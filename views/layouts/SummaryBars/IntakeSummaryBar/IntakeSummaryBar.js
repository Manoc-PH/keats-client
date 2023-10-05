import React, { useEffect, useState } from "react";
import { View } from "react-native";
import moment from "moment";

// Constants
import { INTAKE_SUMMARY_TYPES, WEEK_DAYS } from "@app/common/constants/options";
import { FONT_SIZES } from "@app/common/constants/styles";

// Hooks
import { useGetDailyNutrientsList } from "@app/core/hooks/api";

// Components
import { SubHeadline2, TextSkeleton } from "@app/views/components";
import IntakeDateSummary from "./IntakeDateSummary";

import { styles } from "./styles";
export default function IntakeSummaryBar(props) {
  // Destructure
  const { type, monthDate } = props;

  // Local states
  const [weekDates, setWeekDates] = useState();
  const [monthWeekDates, setMonthWeekDates] = useState();
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
  function generateMonthWeeks(year, month) {
    const firstDayOfMonth = moment({ year, month, day: 1 });
    const weeks = [];
    let currentDay = firstDayOfMonth.clone().startOf("week");
    while (currentDay.month() === month && currentDay.year() === year) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        week.push(currentDay.format("YYYY-MM-DD"));
        currentDay.add(1, "day");
      }
      weeks.push(week);
    }
    return weeks;
  }
  function formatNutrientSummary(data) {
    const summary = {};
    data.forEach((item) => {
      summary[moment(item?.date_created).format("YYYY-MM-DD")] = item;
    });
    setNutrientSummary(summary);
  }

  useEffect(() => {
    if (type === INTAKE_SUMMARY_TYPES.monthly) {
      // const initialData = moment().startOf("M").format("YYYY-MM-DD");
      // console.log(initialData);
      // const another = moment().startOf("M").add(1, "M");
      // console.log(another.format("YYYY-MM-DD"));
      const monthWeeks = generateMonthWeeks(
        moment(monthDate).get("year") || 2023,
        moment(monthDate).get("M") || 10
      );
      setMonthWeekDates(monthWeeks);
      getDailyNutrientsList({
        start_date: moment(monthWeeks[0][0]).toISOString(),
        end_date: moment(
          monthWeeks[monthWeeks.length - 1][
            monthWeeks[monthWeeks.length - 1].length - 1
          ]
        ).toISOString(),
      });
    }
    if (type === INTAKE_SUMMARY_TYPES.weekly) {
      const weeks = generateDatesForWeek();
      setWeekDates(weeks);
      getDailyNutrientsList({
        start_date: moment(weeks[0]).toISOString(),
        end_date: moment(weeks[weeks.length - 1]).toISOString(),
      });
    }
  }, [monthDate]);
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
            weekDates.map((date) => {
              return (
                <IntakeDateSummary
                  key={date}
                  nutrientSummary={
                    nutrientSummary ? nutrientSummary[date] : null
                  }
                  isLoading={isGetDailyNutrientsListLoading}
                  date={date}
                />
              );
            })}
        </View>
      )}
      {type === INTAKE_SUMMARY_TYPES.monthly && (
        <>
          {monthWeekDates &&
            monthWeekDates.map((week, i) => (
              <View key={i} style={styles.dateContainer}>
                {week &&
                  week.map((date) => {
                    return (
                      <IntakeDateSummary
                        key={date}
                        nutrientSummary={
                          nutrientSummary ? nutrientSummary[date] : null
                        }
                        isLoading={isGetDailyNutrientsListLoading}
                        date={date}
                      />
                    );
                  })}
              </View>
            ))}
        </>
      )}
    </View>
  );
}

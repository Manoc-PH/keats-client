import React, { useEffect, useState } from "react";
import { View } from "react-native";
import moment from "moment";

// Constants
import { INTAKE_SUMMARY_TYPES, WEEK_DAYS } from "@app/common/constants/options";

// Components
import { CircleBar, SubHeadline2 } from "@app/views/components";

import { styles } from "./styles";
export default function IntakeSummaryBar(props) {
  // Destructure
  const { type } = props;

  // Local states
  const [weekDates, setWeekDates] = useState();

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

  useEffect(() => {
    if (type === INTAKE_SUMMARY_TYPES.weekly) {
      const weeks = generateDatesForWeek();
      setWeekDates(weeks);
    }
  }, []);
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        {WEEK_DAYS.map((item) => (
          <View key={item} style={styles.itemSpace}>
            <SubHeadline2 style={styles.text}>{item}</SubHeadline2>
          </View>
        ))}
      </View>
      <View style={styles.dateContainer}>
        {type === INTAKE_SUMMARY_TYPES.weekly &&
          weekDates &&
          weekDates.map((date) => (
            <View
              key={date}
              style={{ ...styles.barContainer, ...styles.itemSpace }}>
              <CircleBar progress={0} size={styles.itemSpace.width * 0.7}>
                <SubHeadline2>{moment(date).format("DD")}</SubHeadline2>
              </CircleBar>
            </View>
          ))}
      </View>
    </View>
  );
}

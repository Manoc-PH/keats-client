import React from "react";
import { View } from "react-native";
import moment from "moment";

// Constants
import { WEEK_DAYS } from "@app/common/constants/options";

// Components
import { SubHeadline2 } from "@app/views/components";

import { styles } from "./styles";
export default function IntakeSummaryBar(props) {
  // Destructure
  const { type } = props;

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
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        {WEEK_DAYS.map((item) => (
          <View
            key={item}
            style={{ ...styles.headerContainer, ...styles.itemSpace }}>
            <SubHeadline2 style={styles.text}>{item}</SubHeadline2>
          </View>
        ))}
      </View>
    </View>
  );
}

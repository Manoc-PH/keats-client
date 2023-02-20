import { View, Dimensions, FlatList } from "react-native";
import { useEffect, useState } from "react";
import moment from "moment/moment";

import { styles } from "./styles";

export default function CalorieGraph() {
  // TODO QUERY ENDPOINTS HERE
  const [weeks, setWeeks] = useState();
  const [numOfWeeks, setNumOfWeeks] = useState(
    Math.floor(Dimensions.get("window").width / 15) - 1
  );

  function calcWeeks() {
    let base_start_day = moment().startOf("week");
    const tempWeeks = [];
    for (let i = numOfWeeks; i > 0; i--) {
      const start_day = moment(base_start_day).startOf("week");
      const end_day = moment(base_start_day).startOf("week");
      const day = start_day.clone().subtract(1, "day");
      while (day.isBefore(end_day, "day")) {
        tempWeeks.push({
          week: Array(7)
            .fill(0)
            .map(() => {
              return {
                day: day.add(1, "day").clone(),
                id: day.add(1, "day").clone().format("YYYY-MM-DD"),
              };
            }),
          id: day.format("YYYY-MM-DD"),
        });
      }
      base_start_day.subtract(1, "week");
    }
    setWeeks(tempWeeks);
  }

  useEffect(() => {
    calcWeeks();
  }, []);
  return (
    <View style={styles.wrapper}>
      <View style={styles.rowWrapper}>
        {weeks &&
          weeks.map((week_item) => (
            <View style={styles.rowContainer} key={week_item.id}>
              <View style={styles.colContainer}>
                {week_item?.week &&
                  week_item?.week.map((day_item, i) => (
                    <View
                      style={styles.btn}
                      key={day_item && day_item.id}></View>
                  ))}
              </View>
            </View>
          ))}
      </View>
    </View>
  );
}

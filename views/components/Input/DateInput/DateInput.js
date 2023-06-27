import React, { useEffect, useMemo, useState } from "react";
import { View, TextInput as TextInputRN } from "react-native";
import DatePicker from "react-native-date-picker";

import { styles } from "./styles";
import SubHeadline1 from "../../Basic/Texts/SubHeadline1/SubHeadline1";
import moment from "moment";
import VerticalSlider from "../../Basic/VerticalSlider";

export default function DateInput(props) {
  // Destructure
  const {
    value,
    onChangeText,
    placeholder,
    startIcon,
    onStartIconPress,
    suffix,
    label,
    ...rest
  } = props;

  const [month, setMonth] = useState("0");
  const [day, setDay] = useState("1");
  const [year, setYear] = useState("2001");
  const [date, setDate] = useState(
    moment({
      year: parseInt(year, 10),
      month: parseInt(month, 10),
      day: parseInt(day, 10),
    })
  );
  const Months = useMemo(
    () =>
      moment.months().map((m, index) => {
        const formattedMonth = moment().month(index).format("MMM");
        return formattedMonth;
      }),
    [0]
  );
  const Days = useMemo(() => {
    const daysInMonth = moment({
      month: parseInt(month, 10),
    }).daysInMonth();
    const daysArray = [];

    for (let d = 1; d <= daysInMonth; d++) {
      daysArray.push(`${d}`);
    }
    return daysArray;
  }, [month]);
  const Years = useMemo(() => {
    const year = new Date().getFullYear();
    return Array.from({ length: 120 }, (v, i) => `${year - 120 + i + 1}`);
  }, []);

  useEffect(() => onChangeText(date), [date]);
  useEffect(() => {
    if (day && month && year) {
      // console.log(
      //   moment({
      //     year: parseInt(year, 10),
      //     month: parseInt(month, 10),
      //     day: parseInt(day, 10),
      //   })
      //     .subtract(1, "day")
      //     .format("MMMM DD YYYY")
      // );
      setDate(
        moment({
          year: parseInt(year, 10),
          month: parseInt(month, 10),
          day: parseInt(day, 10),
        }).subtract(1, "day")
      );
    }
  }, [day, month, year]);
  return (
    <View style={styles.wrapper}>
      {label && (
        <View style={styles.labelContainer}>
          <SubHeadline1>{label}</SubHeadline1>
        </View>
      )}
      <View style={styles.container}>
        <VerticalSlider
          value={month}
          onChangeValue={(v) => {
            setMonth(`${v - 1}`);
          }}
          data={Months}
        />
        <View style={styles.spacer} />
        <VerticalSlider
          value={day}
          onChangeValue={(v) => {
            setDay(`${v}`);
          }}
          data={Days}
        />
        <View style={styles.spacer} />
        <VerticalSlider
          value={year}
          onChangeValue={(v) => {
            setYear(`${Years[v - 1]}`);
          }}
          data={Years}
        />
      </View>
    </View>
  );
}

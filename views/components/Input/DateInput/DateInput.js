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

  const [month, setMonth] = useState("1");
  const [day, setDay] = useState("1");
  const [year, setYear] = useState("2001");
  const [date, setDate] = useState(moment({ parseInt(year, 10), month, day }));
  const Months = useMemo(
    () =>
      moment.months().map((month, index) => {
        const formattedMonth = moment().month(index).format("MMM");
        return formattedMonth;
      }),
    [0]
  );
  const Days = useMemo(() => {
    const daysInMonth = moment(month).daysInMonth();
    const daysArray = [];

    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(`${day}`);
    }
    return daysArray;
  }, [month]);
  const Years = useMemo(() => {
    const year = new Date().getFullYear();
    return Array.from({ length: 120 }, (v, i) => `${year - 120 + i + 1}`);
  }, []);

  useEffect(() => onChangeText(date), [date]);
  return (
    <View style={styles.wrapper}>
      {label && (
        <View style={styles.labelContainer}>
          <SubHeadline1>{label}</SubHeadline1>
        </View>
      )}
      <View style={styles.container}>
        {/* <VerticalSlider
          value={month}
          onChangeValue={(v) => {
            setMonth(v);
          }}
          data={Months}
        />
        <VerticalSlider
          value={day}
          onChangeValue={(v) => {
            setDay(v);
          }}
          data={Days}
        /> */}
        <VerticalSlider
          value={year}
          onChangeValue={(v) => {
            setYear(`${Years[v - 1]}`);
            console.log(`${Years[v - 1]}`);
          }}
          data={Years}
        />
      </View>
    </View>
  );
}

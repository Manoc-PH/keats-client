import React, { useEffect, useState } from "react";
import { View, TextInput as TextInputRN } from "react-native";
import DatePicker from "react-native-date-picker";

import { styles } from "./styles";
import SubHeadline1 from "../../Basic/Texts/SubHeadline1/SubHeadline1";
import moment from "moment";

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

  const [date, setDate] = useState(
    new Date(moment().subtract(18, "years").format("YYYY-MM-DD"))
  );

  // useEffect(() => {
  //   console.log(date);
  // }, [date]);
  return (
    <View style={styles.wrapper}>
      {label && (
        <View style={styles.labelContainer}>
          <SubHeadline1>{label}</SubHeadline1>
        </View>
      )}
      <View style={styles.container}>
        <DatePicker
          maximumDate={new Date()}
          date={date}
          onDateChange={setDate}
          mode='date'
        />
      </View>
    </View>
  );
}

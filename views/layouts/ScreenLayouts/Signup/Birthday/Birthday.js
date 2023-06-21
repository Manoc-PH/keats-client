import React from "react";
// Components
import { DateInput } from "@app/views/components";

export default function Birthday(props) {
  const { birthday, setBirthday } = props;
  return <DateInput onChangeText={setBirthday} value={birthday} />;
}

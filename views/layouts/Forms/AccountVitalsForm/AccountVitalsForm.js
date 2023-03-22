import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import { styles } from "./styles";
import { TextInput } from "@app/views/components";

export default function AccountVitalsForm(props) {
  // Destructure
  const { data, setData, onSubmit } = props;

  const [username, setUsername] = useState(data?.username || "");
  const [password, setPassword] = useState(data?.password || "");
  const [account_id, setAccount_id] = useState(data?.account_id || "");
  const [weight, setWeight] = useState(data?.weight || 0);
  const [height, setHeight] = useState(data?.height || 0);
  const [birthday, setBirthday] = useState(data?.birthday || "");
  const [sex, setSex] = useState(data?.sex || "");
  const [activity_lvl_id, setActivityLvlId] = useState(
    data?.activity_lvl_id || ""
  );
  const [activity_lvl_name, setActivityLvlName] = useState(
    data?.activity_lvl_name || ""
  );
  const [bmr_multiplier, setBmrMultiplier] = useState(
    data?.bmr_multiplier || 0
  );
  const [diet_plan_id, setDietPlanId] = useState(data?.diet_plan_id || 0);
  const [diet_plan_name, setDietPlanName] = useState(data?.diet_plan_name || 0);

  function updateData() {
    setData({ username, password });
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""}
      style={styles.container}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder={"Username"}
        onBlur={updateData}
        onSubmitEditing={({ nativeEvent: { text } }) => {
          updateData();
          onSubmit({ ...data, username: text });
        }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={"Password"}
        onBlur={updateData}
        secureTextEntry={true}
        onSubmitEditing={({ nativeEvent: { text } }) => {
          updateData();
          onSubmit({ ...data, password: text });
        }}
      />
    </KeyboardAvoidingView>
  );
}

import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, View } from "react-native";
// Components
import { SubHeadline2, Title3 } from "@app/views/components";
// Hooks
import { useGetActivityLevels, useGetDietPlans } from "@app/core/hooks/api";
// Layouts
import UsernamePassword from "../../ScreenLayouts/Signup/UsernamePassword";
import Sex from "../../ScreenLayouts/Signup/Sex";
import Birthday from "../../ScreenLayouts/Signup/Birthday";
import Weight from "../../ScreenLayouts/Signup/Weight";
import Height from "../../ScreenLayouts/Signup/Height";
import ActivityLevel from "../../ScreenLayouts/Signup/ActivityLevel";
import DietPlan from "../../ScreenLayouts/Signup/DietPlan";

import { styles } from "./styles";

export default function SignupForm(props) {
  // Destructure
  const { data, setData, activePage, errorMsg, setErrorMsg } = props;

  // Form states
  const [username, setUsername] = useState(data?.username || "");
  const [name_first, setNameFirst] = useState(data?.username || "");
  const [name_last, setNameLast] = useState(data?.username || "");
  const [password, setPassword] = useState(data?.password || "");

  // Variables
  const titles = [
    "Enter username and password",
    "Select your sex",
    "Enter your birthday",
    "Enter your weight",
    "Enter your height",
    "Select your activity level",
    "Select your diet plan",
  ];

  // Functions
  function updateData() {
    setErrorMsg();
    setData({
      username,
      password,
      name_first,
      name_last,
    });
  }

  // UseEffects
  useEffect(() => {
    updateData();
  }, [username, password, name_first, name_last]);
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.contentTitle}>
        <Title3 style={styles.title}>Signup to Keats</Title3>
        {errorMsg && (
          <SubHeadline2 style={styles.error}>{errorMsg}</SubHeadline2>
        )}
      </View>
      <UsernamePassword
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        setErrorMsg={setErrorMsg}
        errorMsg={errorMsg}
        name_first={name_first}
        setNameFirst={setNameFirst}
        name_last={name_last}
        setNameLast={setNameLast}
      />
    </View>
  );
}

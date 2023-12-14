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
  const [birthday, setBirthday] = useState(data?.birthday);
  const [sex, setSex] = useState(data?.sex);
  const [weight, setWeight] = useState(data?.weight);
  const [height, setHeight] = useState(data?.height);
  const [activity_lvl_id, setActivityLvlId] = useState(data?.activity_lvl_id);
  const [diet_plan_id, setDietPlanId] = useState(data?.diet_plan_id);

  const [activityLevels, setActivityLevels] = useState();
  const [dietPlans, setDietPlans] = useState();
  // Hooks
  const { getActivityLevels, getActivityLevelsData } = useGetActivityLevels();
  const { getDietPlans, getDietPlansData } = useGetDietPlans();

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

  // Components
  const components = [
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
    />,
    <Sex sex={sex} setSex={setSex} />,
    <Birthday birthday={birthday} setBirthday={setBirthday} />,
    <Weight weight={weight} setWeight={setWeight} />,
    <Height height={height} setHeight={setHeight} sex={sex} />,
    <ActivityLevel
      activity_lvl_id={activity_lvl_id}
      setActivityLvlId={setActivityLvlId}
      activityLevels={activityLevels}
    />,
    <DietPlan
      dietPlans={dietPlans}
      diet_plan_id={diet_plan_id}
      setDietPlanId={setDietPlanId}
    />,
  ];

  // Functions
  function updateData() {
    setData({
      username,
      password,
      birthday,
      sex,
      weight,
      height,
      activity_lvl_id,
      diet_plan_id,
    });
  }

  // UseEffects
  useEffect(() => {
    getActivityLevels();
    getDietPlans();
  }, []);
  useEffect(() => {
    if (getDietPlansData) setDietPlans(getDietPlansData);
    if (getActivityLevelsData) setActivityLevels(getActivityLevelsData);
  }, [getDietPlansData, getActivityLevelsData]);
  useEffect(() => {
    updateData();
  }, [
    username,
    password,
    birthday,
    sex,
    weight,
    height,
    activity_lvl_id,
    diet_plan_id,
  ]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""}
      style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.contentTitle}>
          <Title3 style={styles.title}>{titles[activePage]}</Title3>
          {errorMsg && (
            <SubHeadline2 style={styles.error}>{errorMsg}</SubHeadline2>
          )}
        </View>
        {components[activePage]}
      </View>
    </KeyboardAvoidingView>
  );
}

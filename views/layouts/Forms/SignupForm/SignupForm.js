import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, View } from "react-native";

import { styles } from "./styles";
import {
  DateInput,
  SliderInput,
  SubHeadline2,
  TextInput,
  Title3,
} from "@app/views/components";
import themeColors from "@app/common/theme";

export default function SignupForm(props) {
  // Destructure
  const { data, setData, activePage, errorMsg, setErrorMsg } = props;

  // Form states
  const [username, setUsername] = useState(data?.username || "");
  const [password, setPassword] = useState(data?.password || "");
  const [birthday, setBirthday] = useState(data?.birthday);
  const [sex, setSex] = useState(data?.sex);
  const [weight, setWeight] = useState(data?.weight);
  const [height, setHeight] = useState(data?.height);
  const [activity_lvl_id, setActivityLvlId] = useState(data?.activity_lvl_id);
  const [diet_plan_id, setDietPlanId] = useState(data?.diet_plan_id);

  // Variables
  const titles = [
    "Enter username and password",
    "Select your sex",
    "Enter your birthday",
    "Enter your weight",
    "Enter your height",
    "Select your activity level",
    "Select your fitness goal",
  ];
  const components = [
    <UsernamePassword
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      setErrorMsg={setErrorMsg}
    />,
    <Sex />,
    <Birthday birthday={birthday} setBirthday={setBirthday} />,
    <Weight />,
    <Height />,
    <ActivityLevel />,
    <FitnessGoal />,
  ];
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
        <Title3 style={styles.title}>{titles[activePage]}</Title3>
        {errorMsg && (
          <SubHeadline2 style={styles.error}>{errorMsg}</SubHeadline2>
        )}
        {components[activePage]}
      </View>
    </KeyboardAvoidingView>
  );
}
function UsernamePassword(props) {
  const { username, setUsername, password, setPassword, setErrorMsg } = props;
  const [confirmPassword, setConfirmPassword] = useState();

  useEffect(() => {
    setErrorMsg("");
  }, [username]);
  useEffect(() => {
    if (!confirmPassword || !password) return;
    if (confirmPassword === password) {
      setErrorMsg("");
      return;
    } else if (confirmPassword !== password) {
      setErrorMsg("Password does not match");
    }
  }, [confirmPassword, password]);
  return (
    <>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder={"Username"}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={"Password"}
        secureTextEntry={true}
      />
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder={"Confirm Password"}
        secureTextEntry={true}
      />
    </>
  );
}
function Sex(props) {
  const { sex, setSex } = props;
  return (
    <>
      <TextInput value={sex} onChangeText={setSex} placeholder={"Sex"} />
    </>
  );
}
function Birthday(props) {
  const { birthday, setBirthday } = props;
  return <DateInput onChangeText={setBirthday} value={birthday} />;
}
function Weight(props) {
  const {} = props;
  return (
    <View>
      <SliderInput initialIndex={60} minValue={1} maxValue={100} incValue={1} />
    </View>
  );
}
function Height(props) {
  const {} = props;
  return <View></View>;
}
function ActivityLevel(props) {
  const {} = props;
  return <View></View>;
}
function FitnessGoal(props) {
  const {} = props;
  return <View></View>;
}

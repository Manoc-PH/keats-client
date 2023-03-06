import React, { useState } from "react";
import { KeyboardAvoidingView, View } from "react-native";

import { styles } from "./styles";
import {
  DateInput,
  SliderInput,
  TextInput,
  Title3,
} from "@app/views/components";
import themeColors from "@app/common/theme";

export default function SignupForm(props) {
  // Destructure
  const { data, setData, activePage } = props;

  // Form states
  const [username, setUsername] = useState(data?.username || "");
  const [password, setPassword] = useState(data?.password || "");
  const [confirmPassword, setConfirmPassword] = useState();
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
    "Selct your weight",
    "Selct your height",
    "Selct your activity level",
    "Selct your fitness goal",
  ];
  const components = [
    <UsernamePassword username={username} setUsername={setUsername} />,
    <Sex />,
    <Birthday />,
    <Weight />,
    <Height />,
    <ActivityLevel />,
    <FitnessGoal />,
  ];
  function updateData() {
    setData({ username, password, birthday });
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""}
      style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.title}>
          <Title3>{titles[activePage]}</Title3>
        </View>
        {components[activePage]}
      </View>
    </KeyboardAvoidingView>
  );
}
function UsernamePassword(props) {
  const { username, setUsername, password, setPassword } = props;
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
  const {} = props;
  return <DateInput onChangeText={() => {}} />;
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

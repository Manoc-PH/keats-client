import React, { useEffect, useState } from "react";
import { Dimensions, KeyboardAvoidingView, View } from "react-native";

import { styles } from "./styles";
import {
  CarouselInput,
  DateInput,
  ImageButton,
  NumberInput,
  SliderInput,
  SubHeadline2,
  TextInput,
  Title3,
} from "@app/views/components";
import themeColors from "@app/common/theme";
import { BTN_VARIANTS } from "@app/common/constants/styles";
import {
  MaleSvg,
  FemaleSvg,
  FemaleDarkSvg,
  MaleDarkSvg,
} from "@app/assets/imageSvg";

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
    <Sex sex={sex} setSex={setSex} />,
    <Birthday birthday={birthday} setBirthday={setBirthday} />,
    <Weight weight={weight} setWeight={setWeight} />,
    <Height height={height} setHeight={setHeight} sex={sex} />,
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
    <View style={styles.sexContainer}>
      <ImageButton
        variant={BTN_VARIANTS.outlined}
        color={sex === "M" ? themeColors.primary : themeColors.secondaryLight}
        style={{
          borderColor:
            sex === "M" ? themeColors.primary : themeColors.backgroundLight,
        }}
        onPress={() => {
          setSex("M");
        }}
        image={
          <View style={styles.imageButtonImageContainer}>
            <MaleSvg />
          </View>
        }>
        Male
      </ImageButton>
      <ImageButton
        variant={BTN_VARIANTS.outlined}
        color={sex === "F" ? themeColors.primary : themeColors.secondaryLight}
        style={{
          borderColor:
            sex === "F" ? themeColors.primary : themeColors.backgroundLight,
        }}
        onPress={() => {
          setSex("F");
        }}
        image={
          <View style={styles.imageButtonImageContainer}>
            <FemaleSvg />
          </View>
        }>
        Female
      </ImageButton>
    </View>
  );
}
function Birthday(props) {
  const { birthday, setBirthday } = props;
  return <DateInput onChangeText={setBirthday} value={birthday} />;
}
function Weight(props) {
  const { weight, setWeight } = props;
  return (
    <NumberInput
      incrementValue={1}
      maxValue={635}
      optionPlaceholder={"Kilograms"}
      options={[]}
      value={weight}
      onChange={setWeight}
    />
  );
}
function Height(props) {
  const { sex, height, setHeight } = props;
  const maxHeight = 272;
  const usableScreen = Dimensions.get("window").height * 0.6;

  function convertToFt(v) {
    if (v) {
      const inches = v / 2.54;
      const feet = Math.floor(inches / 12);
      return `${feet}'${Math.floor(inches % 12)} ft`;
    }
  }
  return (
    <View style={styles.heightWrapper}>
      <View style={styles.heightContentWrapper}>
        <View style={styles.heightContentContainer}>
          <SubHeadline2 style={styles.subtitle}>
            Avg {sex === "F" ? "Female" : "Male"} Filipino{" "}
            {sex === "F" ? "(4'11 ft or 149 cm)" : "(5'4 ft or 163 cm)"}
          </SubHeadline2>
          {sex === "F" ? (
            <FemaleDarkSvg height={(usableScreen / maxHeight) * 149} />
          ) : (
            <MaleDarkSvg height={(usableScreen / maxHeight) * 163} />
          )}
        </View>
        <View style={styles.heightContentContainer}>
          <SubHeadline2 style={styles.subtitle}>
            Your height{" "}
            {height ? `(${convertToFt(height)} or ${height} cm)` : ""}
          </SubHeadline2>
          {sex === "F" ? (
            <FemaleSvg height={(usableScreen / maxHeight) * (height || 149)} />
          ) : (
            <MaleSvg height={(usableScreen / maxHeight) * (height || 191)} />
          )}
        </View>
      </View>
      <NumberInput
        incrementValue={1}
        maxValue={maxHeight}
        optionPlaceholder={"CM"}
        options={[]}
        value={height || (sex === "F" ? 149 : 163)}
        onChange={setHeight}
      />
    </View>
  );
}
function ActivityLevel(props) {
  const {} = props;
  return <CarouselInput style={{ height: "80%" }} />;
}
function FitnessGoal(props) {
  const {} = props;
  return <View></View>;
}

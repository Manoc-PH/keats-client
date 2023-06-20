import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Pressable,
  View,
} from "react-native";

import { styles } from "./styles";
import {
  Body,
  Carousel,
  DateInput,
  ImageButton,
  NumberInput,
  SliderInput,
  SubHeadline2,
  TextInput,
  Title3,
} from "@app/views/components";
import themeColors from "@app/common/theme";
import { BTN_VARIANTS, SPACING } from "@app/common/constants/styles";
import {
  MaleSvg,
  FemaleSvg,
  FemaleDarkSvg,
  MaleDarkSvg,
} from "@app/assets/imageSvg";
import { useGetActivityLevels, useGetDietPlans } from "@app/core/hooks/api";
import { ImageIcon } from "@app/assets/icons";

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

  const [activityLevels, setActivityLevels] = useState();
  const [dietPlans, setDietPlans] = useState();
  // Hooks
  const {
    getActivityLevels,
    getActivityLevelsData,
    // isGetActivityLevelsLoading,
    // isGetActivityLevelsSuccess
  } = useGetActivityLevels();
  const {
    getDietPlans,
    getDietPlansData,
    // isGetDietPlansLoading,
    // isGetDietPlansSuccess,
  } = useGetDietPlans();

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
    <View style={styles.itemWrapper}>
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
    </View>
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
    <View style={styles.itemWrapper}>
      <NumberInput
        incrementValue={1}
        maxValue={635}
        optionPlaceholder={"Kilograms"}
        options={[]}
        value={weight}
        onChange={setWeight}
      />
    </View>
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
  const { activityLevels, activity_lvl_id, setActivityLvlId } = props;
  if (!activityLevels) return;
  const newData = [];
  activityLevels.map((item) => {
    newData.push({
      key: item.id,
      ...item,
      children: (
        <Pressable
          onPress={() => {
            setActivityLvlId(item.id);
          }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: SPACING.Large,
            borderWidth: 2,
            borderColor:
              activity_lvl_id === item.id
                ? themeColors.primary
                : themeColors.backgroundLight,
            backgroundColor: themeColors.background,
          }}>
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: item.background_color,
              borderTopLeftRadius: SPACING.Medium,
              borderTopRightRadius: SPACING.Medium,
              padding: SPACING.Medium,
            }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={{
                uri: item.main_image_link,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              padding: SPACING.Medium,
            }}>
            <Title3>{item.name}</Title3>
            <View style={{ width: "100%", height: SPACING.Regular }} />
            <Body>{item.activity_lvl_desc}</Body>
          </View>
        </Pressable>
      ),
    });
  });
  useEffect(() => {
    if (!activity_lvl_id) setActivityLvlId(newData[0].id);
  }, []);
  return <Carousel data={newData} style={{ height: "80%" }} />;
}
function DietPlan(props) {
  const { dietPlans, diet_plan_id, setDietPlanId } = props;
  if (!dietPlans) return;
  const newData = [];
  dietPlans.map((item) => {
    newData.push({
      key: item.id,
      ...item,
      children: (
        <Pressable
          onPress={() => {
            setDietPlanId(item.id);
          }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: SPACING.Large,
            borderWidth: 2,
            borderColor:
              diet_plan_id === item.id
                ? themeColors.primary
                : themeColors.backgroundLight,
            backgroundColor: themeColors.background,
          }}>
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: item?.background_color
                ? item.background_color
                : themeColors.backgroundLight,
              borderTopLeftRadius: SPACING.Medium,
              borderTopRightRadius: SPACING.Medium,
              padding: SPACING.Medium,
            }}>
            {item?.main_image_link ? (
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{
                  uri: item.main_image_link,
                }}
              />
            ) : (
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <ImageIcon width={SPACING.Huge * 2} height={SPACING.Huge * 2} />
              </View>
            )}
          </View>
          <View
            style={{
              flex: 1,
              padding: SPACING.Medium,
            }}>
            <Title3>{item.name}</Title3>
            <View style={{ width: "100%", height: SPACING.Regular }} />
            <Body>{item.diet_plan_desc}</Body>
          </View>
        </Pressable>
      ),
    });
  });
  useEffect(() => {
    if (!diet_plan_id) setDietPlanId(newData[0].id);
  }, []);
  return <Carousel data={newData} style={{ height: "80%" }} />;
}

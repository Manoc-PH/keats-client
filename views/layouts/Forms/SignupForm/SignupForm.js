import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Pressable,
  View,
  TextInput as TextInputRN,
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
import {
  useGetActivityLevels,
  useGetDietPlans,
  useGetNameAvailability,
} from "@app/core/hooks/api";
import { ImageIcon } from "@app/assets/icons";
import useDebounce, { debounce } from "@app/common/utils/debounce";
import { FONT_WEIGHTS } from "@app/common/constants/styles";
import { FONT_SIZES } from "@app/common/constants/styles";
import { SEX } from "@app/common/constants/options";

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
  const {
    username,
    setUsername,
    password,
    setPassword,
    setErrorMsg,
    errorMsg,
  } = props;
  const [confirmPassword, setConfirmPassword] = useState();

  const { getNameAvailability, getNameAvailabilityData } =
    useGetNameAvailability();

  function fetchNameAvailability() {
    if (username) getNameAvailability(username);
  }

  useDebounce(fetchNameAvailability, [username], 400);
  // Bruh this is confusing
  // TODO Fix it
  useEffect(() => {
    if (getNameAvailabilityData === true) {
      if (confirmPassword !== password) {
        setErrorMsg("Password does not match");
        return;
      }
      setErrorMsg("");
    }
    if (getNameAvailabilityData === false)
      setErrorMsg("Username is taken already, try a different one");
  }, [getNameAvailabilityData]);
  useEffect(() => {}, []);
  useEffect(() => {
    if (errorMsg === "Username is taken already, try a different one") return;
    if (!confirmPassword && !password) return;
    if (confirmPassword === password) {
      setErrorMsg("");
      return;
    } else if (confirmPassword !== password) {
      setErrorMsg("Password does not match");
    } else setErrorMsg("");
  }, [confirmPassword, password, username]);
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
        color={
          sex === SEX.male ? themeColors.primary : themeColors.secondaryLight
        }
        style={{
          borderColor:
            sex === SEX.male
              ? themeColors.primary
              : themeColors.backgroundLight,
        }}
        onPress={() => {
          setSex(SEX.male);
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
        color={
          sex === SEX.female ? themeColors.primary : themeColors.secondaryLight
        }
        style={{
          borderColor:
            sex === SEX.female
              ? themeColors.primary
              : themeColors.backgroundLight,
        }}
        onPress={() => {
          setSex(SEX.female);
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
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  const defaultHeight = 55;
  // Debounced Functions
  const debouncedSetAmount = debounce(setWeight, 100);
  // Refs
  const valueRef = useRef();
  // Functions
  function handleChange(v) {
    if (valueRef && valueRef.current) {
      valueRef.current.setNativeProps({ text: `${v}` });
      debouncedSetAmount(v);
    }
  }
  return (
    <View
      style={{
        width: width,
        height: height - SPACING.Huge * 2,
        alignItems: "center",
        justifyContent: "flex-end",
        padding: SPACING.Medium,
      }}>
      <View
        style={{
          width: width,
          height: SPACING.Large,
        }}>
        <SliderInput
          value={weight || defaultHeight}
          onChangeValue={handleChange}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: SPACING.Huge,
        }}>
        <TextInputRN
          style={{
            fontFamily: FONT_WEIGHTS.Regular,
            fontSize: FONT_SIZES.Regular,
            color: themeColors.secondary,
          }}
          ref={valueRef}
          defaultValue={weight.toString() || defaultHeight}
        />
        <Body>
          {" "}
          KG {`| ${Math.round((weight || defaultHeight) * 2.205)} LBS`}
        </Body>
      </View>
    </View>
  );
}
function Height(props) {
  const { sex, height, setHeight } = props;
  const heightScreen = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  // Debounced Functions
  const debouncedSetAmount = debounce(setHeight, 100);
  // Refs
  const valueRef = useRef();
  // Functions
  function handleChange(v) {
    if (valueRef && valueRef.current) {
      valueRef.current.setNativeProps({ text: `${v}` });
      debouncedSetAmount(v);
    }
  }
  const maxHeight = 272;
  const usableScreen = Dimensions.get("window").height * 0.85;
  const defaultHeight = sex === SEX.female ? 149 : 163;

  function convertToFt(v) {
    if (v) {
      const inches = v / 2.54;
      const feet = Math.floor(inches / 12);
      return `${feet}'${Math.floor(inches % 12)} FT`;
    }
  }
  return (
    <View
      style={{
        width: width,
        height: heightScreen - SPACING.Huge * 2,
        alignItems: "center",
        justifyContent: "flex-end",
        padding: SPACING.Medium,
      }}>
      <View style={styles.heightContentWrapper}>
        <View style={styles.heightContentContainer}>
          <SubHeadline2 style={styles.subtitle}>
            Avg {sex === SEX.female ? "Female" : "Male"} Filipino{" "}
            {sex === SEX.female ? "(4'11 ft or 149 cm)" : "(5'4 ft or 163 cm)"}
          </SubHeadline2>
          {sex === SEX.female ? (
            <FemaleDarkSvg height={(usableScreen / maxHeight) * 149} />
          ) : (
            <MaleDarkSvg height={(usableScreen / maxHeight) * 163} />
          )}
        </View>
        <View style={styles.heightContentContainer}>
          {sex === SEX.female ? (
            <FemaleSvg height={(usableScreen / maxHeight) * (height || 149)} />
          ) : (
            <MaleSvg height={(usableScreen / maxHeight) * (height || 191)} />
          )}
        </View>
      </View>
      <View
        style={{
          width: width,
          height: SPACING.Large,
        }}>
        <SliderInput
          value={height || defaultHeight}
          onChangeValue={handleChange}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: SPACING.Huge,
        }}>
        <TextInputRN
          style={{
            fontFamily: FONT_WEIGHTS.Regular,
            fontSize: FONT_SIZES.Regular,
            color: themeColors.secondary,
          }}
          ref={valueRef}
          defaultValue={height.toString() || defaultHeight}
        />
        <Body> CM | {convertToFt(height || defaultHeight)}</Body>
      </View>
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

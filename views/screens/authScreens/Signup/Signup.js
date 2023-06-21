import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// Store
import { actions } from "@app/core/store";
// Hooks
import { useSignup } from "@app/core/hooks/api";
import { useCreateCredentials } from "@app/core/hooks/db";
// Constants
import { BTN_VARIANTS } from "@app/common/constants/styles";
// Utils
import { authAxios } from "@app/common/utils/axios";
// Theme
import themeColors from "@app/common/theme";
// Components
import { Button, HorizontalProgressBar } from "@app/views/components";
// Layouts
import { SignupForm, Splash } from "@app/views/layouts";

import { styles } from "./styles";

export default function Signup(props) {
  const { navigation } = props;
  // Store Actions
  const { setIsLoggedIn: sili } = actions;
  const dispatch = useDispatch();
  const setIsLoggedIn = (v) => dispatch(sili(v));
  // Local States
  const [loading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [errorMsg, setErrorMsg] = useState();
  const [data, setData] = useState({
    username: "",
    password: "",
    sex: "",
    birthday: "",
    weight: "",
    height: "",
    activity_lvl_id: "",
    diet_plan_id: "",
  });

  // Variables
  const numOfPages = 7;
  const genericSignupErrMsg =
    "An error occured in signing up, please try again later";

  // Hooks
  const {
    createCredentials,
    isCreateCredentialsSuccess,
    isCreateCredentialsError,
  } = useCreateCredentials();
  const {
    signup,
    signupData,
    isSignupLoading,
    isSignupError,
    isSignupSuccess,
  } = useSignup();

  // Functions
  function handleNext() {
    if (errorMsg && errorMsg !== genericSignupErrMsg) return;
    if (activePage === 0 && (!data.username || !data.password)) {
      setErrorMsg("Missing fields, please enter both username and password");
      return;
    }
    if (activePage === 1 && !data.sex) {
      setErrorMsg("Please select your sex");
      return;
    }
    if (activePage === 2 && !data.birthday) {
      setErrorMsg("Please enter your birthday");
      return;
    }
    if (activePage === 3 && !data.weight) {
      setErrorMsg("Please enter your weight");
      return;
    }
    if (activePage === 4 && !data.height) {
      setErrorMsg("Please enter your height");
      return;
    }
    if (activePage === 5 && !data.activity_lvl_id) {
      setErrorMsg("Please select your activity level");
      return;
    }
    if (activePage === 6 && !data.diet_plan_id) {
      setErrorMsg("Please select your diet plan");
      return;
    }
    if (
      activePage === 6 &&
      data.username &&
      data.password &&
      data.sex &&
      data.birthday &&
      data.weight &&
      data.height &&
      data.activity_lvl_id &&
      data.diet_plan_id
    ) {
      signup(data);
    }
    if (activePage < numOfPages - 1) setActivePage((prev) => prev + 1);
    setErrorMsg();
  }
  function handleBack() {
    if (activePage > 0) setActivePage((prev) => prev - 1);
    if (activePage === 0) navigation.navigate("Login");
  }
  function handleSuccess() {
    const cred = {
      id: signupData.data.id,
      username: signupData.data.username,
      account_type_id: signupData.data.account_type_id,
      token: signupData.headers["set-cookie"][0],
    };
    authAxios.defaults.headers.common["Cookie"] =
      signupData.headers["set-cookie"][0];
    createCredentials(cred);
  }

  // UseEffects
  useEffect(() => {
    if (isSignupLoading) setIsLoading(true);
  }, [isSignupLoading]);
  useEffect(() => {
    if (isSignupError) {
      setIsLoading(false);
      setErrorMsg(genericSignupErrMsg);
    }
  }, [isSignupError]);
  useEffect(() => {
    if (isCreateCredentialsError) {
      setIsLoading(false);
      setErrorMsg(genericSignupErrMsg);
    }
  }, [isCreateCredentialsError]);
  useEffect(() => {
    if (isSignupSuccess) handleSuccess();
  }, [isSignupSuccess]);
  useEffect(() => {
    if (isCreateCredentialsSuccess) setIsLoggedIn(true);
  }, [isCreateCredentialsSuccess]);

  return (
    <View
      style={{
        ...styles.wrapper,
        alignItems: loading ? "center" : "flex-start",
      }}>
      {loading && <Splash />}
      {!loading && (
        <>
          <SignupForm
            activePage={activePage}
            data={data}
            setData={setData}
            errorMsg={errorMsg}
            setErrorMsg={setErrorMsg}
          />
          <View style={styles.bottomWrapper}>
            <HorizontalProgressBar
              progress={((activePage + 1) / numOfPages) * 100}
              foregroundColor={themeColors.primary}
              backgroundColor={`${themeColors.primary}25`}
            />
            <View style={styles.bottomContentWrapper}>
              <Button variant={BTN_VARIANTS.outlined} onPress={handleBack}>
                Back
              </Button>
              <Button variant={BTN_VARIANTS.outlined} onPress={handleNext}>
                Next
              </Button>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

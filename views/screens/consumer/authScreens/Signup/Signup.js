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
import { ScrollPage, SignupForm, Splash } from "@app/views/layouts";

import { styles } from "./styles";
import moment from "moment";

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
    name_first: "",
    name_last: "",
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
  function handleSubmit() {
    if (errorMsg && errorMsg !== genericSignupErrMsg) return;
    if (!data.username) {
      setErrorMsg("Missing fields, please enter username ");
      return;
    }
    if (!data.password) {
      setErrorMsg("Missing fields, please enter username ");
      return;
    }
    if (!data.name_first) {
      setErrorMsg("Missing fields, please enter first name ");
      return;
    }
    if (!data.name_last) {
      setErrorMsg("Missing fields, please enter last name ");
      return;
    }
    if (data.password.length < 10) {
      setErrorMsg("Password must be longer than 10 characters");
      return;
    }
    const newData = {
      ...data,
      weight: 68,
      height: 168,
      birthday: moment("2001-03-30").toISOString(),
      sex: "m",
      activity_lvl_id: "669520e4-0ce6-452c-8960-97d4920b7bcf",
      diet_plan_id: "6a08b514-2de1-4e5b-b3f9-b2e666f299c5",
    };
    signup(newData);
    // if (activePage < numOfPages - 1) setActivePage((prev) => prev + 1);
    setErrorMsg();
  }
  function handleBack() {
    navigation.navigate("Login");
  }
  function handleSuccess() {
    const cred = {
      id: signupData.data.id,
      username: signupData.data.username,
      account_type_id: signupData.data.account_type_id,
      token: signupData.data.token,
    };
    authAxios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${signupData.data.token}`;
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
    <ScrollPage
      contentContainerStyle={{
        ...styles.wrapper,
        alignItems: loading ? "center" : "flex-start",
      }}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      automaticallyAdjustKeyboardInsets={true}>
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
            <View style={styles.bottomContentWrapper}>
              <Button
                style={styles.btn}
                variant={BTN_VARIANTS.outlined}
                onPress={handleBack}>
                Back
              </Button>
              <Button
                style={styles.btn}
                variant={BTN_VARIANTS.primary}
                onPress={handleSubmit}>
                Signup
              </Button>
            </View>
          </View>
        </>
      )}
    </ScrollPage>
  );
}

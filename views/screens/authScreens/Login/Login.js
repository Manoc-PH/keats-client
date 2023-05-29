import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";

// Store
import { actions } from "@app/core/store";

// Hooks
import { useLogin } from "@app/core/hooks/api";

import themeColors from "@app/common/theme";
import { useCreateCredentials } from "@app/core/hooks/db";
import { Button, Body, TextInput, Title1 } from "@app/views/components";
import { Loader, LoginForm } from "@app/views/layouts";
import { BTN_VARIANTS, SIZES, SPACING } from "@app/common/constants/styles";
import { styles } from "./styles";
import { authAxios } from "@app/common/utils/axios";

export default function Login(props) {
  // Props
  const { navigation } = props;

  // Local States
  const [data, setData] = useState({ username: "", password: "" });
  const [errMsg, setErrMsg] = useState("");

  // Store Actions
  const { setIsLoggedIn: setIsLoggedInState } = actions;
  const dispatch = useDispatch();
  const setIsLoggedIn = (v) => dispatch(setIsLoggedInState(v));

  // Hooks
  const { loginUser, loginUserData, isLoginUserLoading, loginUserError } =
    useLogin();
  const { createCredentials, isCreateCredentialsSuccess } =
    useCreateCredentials();

  // Functions
  function handleSubmit() {
    loginUser(data);
  }
  function handleEnter(inputData) {
    loginUser(inputData);
  }
  function handleLoginErr() {
    // TODO improve error handling
    if (loginUserError) {
      setErrMsg(loginUserError?.response?.data?.message || "An error occured");
    }
  }
  function handleLoginSuccess() {
    // TODO PROPERLY HANDLE LOGIN SUCCESS
    // !THIS DOES NOT WORK CURRENTLY
    const cred = {
      id: loginUserData.data.id,
      username: loginUserData.data.username,
      account_type_id: loginUserData.data.account_type_id,
      token: loginUserData.headers["set-cookie"][0],
    };
    authAxios.defaults.headers.common["Cookie"] =
      loginUserData.headers["set-cookie"][0];
    createCredentials(cred);
  }

  // UseEffect
  useEffect(() => setErrMsg(), [data]);
  useEffect(() => {
    if (loginUserData) handleLoginSuccess();
  }, [loginUserData]);
  useEffect(() => handleLoginErr(), [loginUserError]);
  useEffect(() => {
    if (isCreateCredentialsSuccess) setIsLoggedIn(true);
  }, [isCreateCredentialsSuccess]);

  return (
    <View style={styles.wrapper}>
      {isLoginUserLoading && <Loader />}
      {!isLoginUserLoading && (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}>
          <View style={styles.titleContainer}>
            <Title1>KEATS</Title1>
          </View>
          {errMsg && (
            <View style={styles.errorContainer}>
              <Body style={styles.error}>Error: {errMsg}</Body>
            </View>
          )}

          <LoginForm data={data} setData={setData} onSubmit={handleEnter} />
          <View style={styles.forgotPassword}>
            <Button
              variant={BTN_VARIANTS.transparent}
              size={SIZES.Small}
              color={themeColors.secondaryLight}>
              Forgot Password
            </Button>
          </View>
          <View style={styles.btnsContainer}>
            <Button style={styles.login} onPress={handleSubmit}>
              Login
            </Button>
            <Button
              variant={BTN_VARIANTS.outlined}
              onPress={() => navigation.navigate("Signup")}>
              Signup
            </Button>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

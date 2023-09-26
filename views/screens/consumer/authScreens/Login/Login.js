import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { View, ScrollView } from "react-native";
// Utils
import { authAxios } from "@app/common/utils/axios";
// Store
import { actions } from "@app/core/store";
// Hooks
import { useLogin } from "@app/core/hooks/api";
// Constants
import themeColors from "@app/common/theme";
// Hooks
import { useCreateCredentials } from "@app/core/hooks/db";
// Components
import { Button, Body, TextInput, Title1 } from "@app/views/components";
// Layouts
import { Loader, LoginForm, Splash } from "@app/views/layouts";

import { BTN_VARIANTS, SIZES, SPACING } from "@app/common/constants/styles";
import { styles } from "./styles";

export default function Login(props) {
  // Props
  const { navigation } = props;

  // Local States
  const [data, setData] = useState({ username: "", password: "" });
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

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
    if (loginUserError) {
      setErrMsg(loginUserError?.response?.data?.message || "An error occured");
      setLoading(false);
    }
  }
  function handleLoginSuccess() {
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
    // TODO Read credentials again after create credentials
    if (isCreateCredentialsSuccess) setIsLoggedIn(true);
  }, [isCreateCredentialsSuccess]);
  useEffect(() => {
    if (isLoginUserLoading) setLoading(true);
  }, [isLoginUserLoading]);

  return (
    <View style={styles.wrapper}>
      {loading && <Splash />}
      {!loading && (
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

import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";

import { Button, Body, TextInput, Title1 } from "@app/views/components";
import { Loader, LoginForm } from "@app/views/layouts";

// Hooks
import { useLogin } from "@app/core/hooks/api";

import themeColors from "@app/common/theme";
import { BTN_VARIANTS, SIZES, SPACING } from "@app/common/constants/styles";
import { styles } from "./styles";

export default function Login(props) {
  // Props
  const { navigation } = props;

  // Local States
  const [data, setData] = useState({ username: "", password: "" });
  const [errMsg, setErrMsg] = useState("");

  // Hooks
  const {
    loginUser,
    loginUserData,
    isLoginUserLoading,
    loginUserError,
    isLoginUserSuccess,
  } = useLogin();

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

  // UseEffect
  useEffect(() => setErrMsg(), [data]);
  useEffect(() => loginUserData && console.log(loginUserData), [loginUserData]);
  useEffect(() => handleLoginErr(), [loginUserError]);

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

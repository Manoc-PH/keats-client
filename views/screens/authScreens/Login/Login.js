import React, { useEffect, useState } from "react";
import { View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";

import { Button, TextInput, Title1 } from "@app/views/components";

import { styles } from "./styles";
import { LoginForm } from "@app/views/layouts";
import { BTN_VARIANTS, SIZES, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

export default function Login() {
  const [data, setData] = useState({ username: "", password: "" });

  useEffect(() => {}, [data]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""}
      style={styles.wrapper}>
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

        <LoginForm data={data} setData={setData} />
        <View style={styles.forgotPassword}>
          <Button
            variant={BTN_VARIANTS.transparent}
            size={SIZES.Small}
            color={themeColors.secondaryLight}>
            Forgot Password
          </Button>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "stretch",
          }}>
          <Button style={styles.login}>Login</Button>
          <Button variant={BTN_VARIANTS.outlined}>Signup</Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

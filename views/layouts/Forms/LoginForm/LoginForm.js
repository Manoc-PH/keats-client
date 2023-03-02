import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { styles } from "./styles";
import { TextInput } from "@app/views/components";

export default function LoginForm(props) {
  // Destructure
  const { data, setData } = props;

  const [username, setUsername] = useState(data?.username || "");
  const [password, setPassword] = useState(data?.password || "");

  function updateData() {
    setData({ username, password });
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""}
      style={styles.container}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder={"Username"}
        onBlur={updateData}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={"Password"}
        onBlur={updateData}
        secureTextEntry={true}
      />
    </KeyboardAvoidingView>
  );
}

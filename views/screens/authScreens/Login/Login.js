import { TextInput, Title1 } from "@app/views/components";
import React, { useState } from "react";
import { View } from "react-native";

import { styles } from "./styles";

export default function Login() {
  const [username, setUsername] = useState("");
  return (
    <View style={styles.wrapper}>
      <Title1>KEATS</Title1>

      <TextInput
        value={username}
        setValue={setUsername}
        placeholder={"Enter username"}
      />
      <TextInput
        value={username}
        setValue={setUsername}
        placeholder={"Enter username"}
      />
    </View>
  );
}

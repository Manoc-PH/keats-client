import React, { useEffect, useState } from "react";
import { View } from "react-native";
// Components
import { TextInput } from "@app/views/components";
// Hooks
import { useGetNameAvailability } from "@app/core/hooks/api";
// Utils
import useDebounce from "@app/common/utils/debounce";

import { styles } from "./styles";

export default function UsernamePassword(props) {
  const {
    username,
    setUsername,
    password,
    setPassword,
    setErrorMsg,
    errorMsg,
    name_first,
    setNameFirst,
    name_last,
    setNameLast,
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
        value={name_first}
        onChangeText={setNameFirst}
        placeholder={"First Name"}
      />
      <TextInput
        value={name_last}
        onChangeText={setNameLast}
        placeholder={"Last Name"}
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

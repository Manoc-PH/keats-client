import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";
// Hooks
import { useGetConsumerVitals } from "@app/core/hooks/api";
// Layouts
import {
  PageDivider,
  ProfileCard,
  ScrollPage,
  VitalsCard,
} from "@app/views/layouts";

import { styles } from "./styles";
import { useEffect } from "react";
import { useReadCredentials } from "@app/core/hooks/db";
import { useState } from "react";

export default function Account() {
  // Store State
  const { consumerVitals } = useSelector((state) => state.account);

  // Store Actions
  const { setConsumerVitals: savs } = actions;
  const dispatch = useDispatch();
  const setConsumerVitals = (v) => dispatch(savs(v));

  // Local State
  const [username, setUsername] = useState();

  // Hooks
  const {
    getConsumerVitals,
    getConsumerVitalsData,
    isGetConsumerVitalsSuccess,
  } = useGetConsumerVitals();
  const { readCredentials, readCredentialsData } = useReadCredentials();

  // UseEffects
  useEffect(() => {
    if (!consumerVitals) getConsumerVitals();
    readCredentials();
  }, []);
  useEffect(() => {
    if (isGetConsumerVitalsSuccess) setConsumerVitals(getConsumerVitalsData);
  }, [getConsumerVitalsData]);
  useEffect(() => {
    if (!readCredentialsData) return;
    if (readCredentialsData?.length < 1) return;
    if (readCredentialsData[0]) {
      setUsername(readCredentialsData[0]?.username);
    }
  }, [readCredentialsData]);
  return (
    <ScrollPage>
      <View style={styles.wrapper}>
        <View style={styles.spacer} />
        <ProfileCard username={username} />
        <View style={styles.spacer} />
        <PageDivider />
        <View style={styles.container}>
          <VitalsCard consumerVitals={consumerVitals} />
        </View>
      </View>
    </ScrollPage>
  );
}

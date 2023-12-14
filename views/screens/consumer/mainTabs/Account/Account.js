import { useState, useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// Store
import { actions } from "@app/core/store";
// Hooks
import { useGetConsumerVitals } from "@app/core/hooks/api";
// Layouts
import {
  Loader,
  PageDivider,
  ProfileCard,
  ScrollPage,
  VitalsCard,
} from "@app/views/layouts";
// Components
import { Button } from "@app/views/components";
// Constants
import { BTN_VARIANTS } from "@app/common/constants/styles";
// Hooks
import { useClearCredentials, useReadCredentials } from "@app/core/hooks/db";
import { styles } from "./styles";

export default function Account() {
  // Store State
  const { consumerVitals } = useSelector((state) => state.account);

  // Store Actions
  const { setConsumerVitals: savs, clearstore: cl } = actions;
  const dispatch = useDispatch();
  const setConsumerVitals = (v) => dispatch(savs(v));
  const clearstore = (v) => dispatch(cl(v));

  // Local State
  const [username, setUsername] = useState();

  // Hooks
  const {
    getConsumerVitals,
    getConsumerVitalsData,
    isGetConsumerVitalsSuccess,
  } = useGetConsumerVitals();
  const {
    clearCredentials,
    isClearCredentialsSuccess,
    isClearCredentialsLoading,
  } = useClearCredentials();
  const { readCredentials, readCredentialsData } = useReadCredentials();

  // Functions
  function handleLogout() {
    clearCredentials();
  }
  function logout() {
    clearstore();
  }

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
  useEffect(() => {
    if (isClearCredentialsSuccess) logout();
  }, [isClearCredentialsSuccess]);
  return (
    <ScrollPage>
      {isClearCredentialsLoading ? (
        <View style={styles.loadingWrapper}>
          <View style={styles.container}>
            <Loader />
          </View>
        </View>
      ) : (
        <View style={styles.wrapper}>
          <View style={styles.spacer} />
          <ProfileCard username={username} />
          <View style={styles.container}>
            <Button variant={BTN_VARIANTS.outlined} onPress={handleLogout}>
              Logout
            </Button>
          </View>
          <PageDivider />
          {/* <View style={styles.container}>
            <VitalsCard consumerVitals={consumerVitals} />
          </View> */}
        </View>
      )}
    </ScrollPage>
  );
}

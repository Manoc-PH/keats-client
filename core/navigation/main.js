import { useEffect } from "react";
import { SafeAreaView, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

// Store
import { actions } from "@app/core/store";

// Hooks
import { useClearCredentials, useReadCredentials } from "@app/core/hooks/db";

// Utils
import { authAxios } from "@app/common/utils/axios";
import { Splash } from "@app/views/screens";
import AuthenticatedScreens from "./authenticated";
import UnauthenticatedScreens from "./unauthenticated";

export default function MainNavigator() {
  // Store State
  const { isLoggedIn } = useSelector((state) => state.auth);
  // Store Actions
  const { setIsLoggedIn: setIsLoggedInState } = actions;
  const dispatch = useDispatch();
  const setIsLoggedIn = (v) => dispatch(setIsLoggedInState(v));

  // Hooks
  const {
    readCredentials,
    readCredentialsData,
    readCredentialsError,
    isReadCredentialsLoading,
    isReadCredentialsSuccess,
  } = useReadCredentials();
  const { clearCredentials } = useClearCredentials();

  // Functions
  function handleCredentials() {
    if (isReadCredentialsSuccess) {
      if (readCredentialsData?.length < 1) {
        setIsLoggedIn(false);
        return;
      }
      if (!readCredentialsData[0]?.token) {
        setIsLoggedIn(false);
        return;
      }
      // checking if cookie expired
      const token = readCredentialsData[0].token;
      const expiryDate = token.split(";")[1].split("=")[1];
      if (moment(expiryDate).diff(moment(), "milliseconds") < 1) {
        clearCredentials();
        setIsLoggedIn(false);
        return;
      }
      authAxios.defaults.headers.common["Cookie"] =
        readCredentialsData[0].token;
      setIsLoggedIn(true);
    }
  }
  useEffect(() => readCredentials(), []);
  useEffect(() => handleCredentials(), [readCredentialsData]);
  useEffect(() => {
    if (readCredentialsError) setIsLoggedIn(false);
  }, [readCredentialsError]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}>
      <NavigationContainer key={isLoggedIn}>
        {isReadCredentialsLoading && <Splash />}
        {!isReadCredentialsLoading && isLoggedIn && <AuthenticatedScreens />}
        {!isReadCredentialsLoading && !isLoggedIn && <UnauthenticatedScreens />}
      </NavigationContainer>
    </SafeAreaView>
  );
}

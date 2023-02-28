import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";

import { useReadCredentials } from "@app/core/hooks/db";

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

  useEffect(() => readCredentials(), []);
  useEffect(() => {
    if (isReadCredentialsSuccess) {
      // TODO
      // Currently only checks if theres atleast one credential
      // try validating the credential if it has atleast a token in it
      if (readCredentialsData?.length > 0) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    }
  }, [readCredentialsData]);
  useEffect(() => {
    if (readCredentialsError) setIsLoggedIn(false);
  }, [readCredentialsError]);
  return (
    <NavigationContainer>
      {isReadCredentialsLoading && <Splash />}
      {!isReadCredentialsLoading && isLoggedIn && <AuthenticatedScreens />}
      {!isReadCredentialsLoading && !isLoggedIn && <UnauthenticatedScreens />}
    </NavigationContainer>
  );
}

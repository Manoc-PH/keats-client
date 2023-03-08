import { useEffect, useState } from "react";
import { View, Text } from "react-native";

// Fonts
import {
  useFonts,
  Montserrat_200ExtraLight,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import MainNavigator from "@app/core/navigation/main";
import AppStoreProvider from "@app/core/providers/AppStoreProvider";
import AppReactQueryProvider from "@app/core/providers/AppReactQueryProvider";
import { Splash } from "./views/screens";
import { SetupDB } from "./services/db";

export default function App() {
  const [isSetupDBLoading, setIsSetupDBLoading] = useState(true);
  const [isSetupDBSuccess, setisSetupDBSuccess] = useState(false);
  const [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  function handleSetup() {
    SetupDB()
      .then(() => {
        setIsSetupDBLoading(false);
        setisSetupDBSuccess(true);
      })
      .catch(() => {
        setIsSetupDBLoading(false);
        setisSetupDBSuccess(false);
      });
  }
  useEffect(() => handleSetup(), []);

  return (
    <AppStoreProvider>
      <AppReactQueryProvider>
        {fontsLoaded && isSetupDBSuccess && <MainNavigator />}
        {isSetupDBLoading && !fontsLoaded && <Splash />}
        {/* TODO Show error page for errors on setupDB */}
        {/* {!isSetupDBSuccess && <Splash />} */}
      </AppReactQueryProvider>
    </AppStoreProvider>
  );
}

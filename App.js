import { useEffect, useState } from "react";
import { View, Text } from "react-native";

// Fonts
import {
  useFonts,
  Outfit_200ExtraLight,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
} from "@expo-google-fonts/outfit";

import MainNavigator from "@app/core/navigation/main";
import AppStoreProvider from "@app/core/providers/AppStoreProvider";
import AppReactQueryProvider from "@app/core/providers/AppReactQueryProvider";
import { Splash } from "./views/layouts";
import { SetupDB } from "./services/db";

export default function App() {
  // TODO use react-native-reanimated for animations
  const [isSetupDBLoading, setIsSetupDBLoading] = useState(true);
  const [isSetupDBSuccess, setisSetupDBSuccess] = useState(false);
  const [fontsLoaded] = useFonts({
    Outfit_200ExtraLight,
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
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
        {(isSetupDBLoading || !fontsLoaded) && <Splash />}
        {/* TODO Show error page for errors on setupDB */}
        {/* {!isSetupDBSuccess && <Splash />} */}
      </AppReactQueryProvider>
    </AppStoreProvider>
  );
}

import { View, Text } from "react-native";
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
import { SetupDB } from "./core/db/setup";
import { useEffect } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  console.log(fontsLoaded);
  useEffect(() => SetupDB(), []);
  return (
    <AppStoreProvider>
      <AppReactQueryProvider>
        {fontsLoaded ? (
          <MainNavigator></MainNavigator>
        ) : (
          <View>
            {/* TODO ADD LOADING PAGE */}
            <Text>Loading...</Text>
          </View>
        )}
      </AppReactQueryProvider>
    </AppStoreProvider>
  );
}

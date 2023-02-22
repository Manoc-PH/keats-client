import { View, Text } from "react-native";
import {
  useFonts,
  Montserrat_200ExtraLight,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import MainNavigator from "./core/navigation/main";
import AppStoreProvider from "./core/providers/AppStoreProvider";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  return (
    <AppStoreProvider>
      {fontsLoaded ? (
        <MainNavigator></MainNavigator>
      ) : (
        <View>
          {/* TODO ADD LOADING PAGE */}
          <Text>Loading...</Text>
        </View>
      )}
    </AppStoreProvider>
  );
}

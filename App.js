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

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  return (
    <>
      {fontsLoaded ? (
        <MainNavigator></MainNavigator>
      ) : (
        <View>
          {/* TODO ADD LOADING PAGE */}
          <Text>Loading...</Text>
        </View>
      )}
    </>
  );
}

import { View } from "react-native";
// import AppLoading from "expo-app-loading";

import MainNavigator from "./core/navigation/main";
// import useFonts from "./core/hooks/useFonts";

export default function App() {
  // const [IsReady, SetIsReady] = useState(false);

  // const LoadFonts = async () => {
  //   await useFonts();
  // };

  // if (!IsReady) {
  //   return (
  //     <AppLoading
  //       startAsync={LoadFonts}
  //       onFinish={() => SetIsReady(true)}
  //       onError={() => {}}
  //     />
  //   );
  // }
  return (
    <View>
      <MainNavigator></MainNavigator>;
    </View>
  );
}

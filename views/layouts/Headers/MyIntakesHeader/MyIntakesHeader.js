import { View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Constants
import { BTN_VARIANTS, SIZES } from "@app/common/constants/styles";

import { Button, Title3 } from "@app/views/components";
import { ArrowLeftIcon } from "@app/assets/icons";
import themeColors from "@app/common/theme";

import { styles } from "./styles";

export default function MyIntakesHeader() {
  // Hooks
  const navigation = useNavigation();

  // Functions
  function handleBack() {
    navigation.navigate("Home", { screen: "HomeDefault" });
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <Button
            variant={BTN_VARIANTS.transparent}
            size={SIZES.Large}
            onPress={handleBack}>
            <ArrowLeftIcon />
          </Button>
        </View>
        <View style={styles.navContainer}>
          <View style={styles.titleContainer}>
            <Title3>What I've Eaten Today</Title3>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

import { View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import themeColors from "@app/common/theme";
import { useDispatch, useSelector } from "react-redux";

// Constants
import { BTN_VARIANTS, SIZES } from "@app/common/constants/styles";
// Components
import { Button, Title1 } from "@app/views/components";
// Assets
import { IntakeIcon, LogoIcon } from "@app/assets/icons";

import { styles } from "./styles";

export default function HomeHeader() {
  // Store State
  const { dailyIntakes } = useSelector((state) => state.tracker);

  // Hooks
  const navigation = useNavigation();
  // Functions
  function openIntakesPage() {
    navigation.navigate("Common", { screen: "MyIntakes" });
  }

  // UseEffects
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <View style={styles.titleContainer}>
            <LogoIcon />
          </View>

          <View style={styles.iconContainer}>
            <Button
              variant={BTN_VARIANTS.transparent}
              size={SIZES.Large}
              onPress={openIntakesPage}>
              <IntakeIcon
                color={themeColors.secondary}
                count={dailyIntakes && dailyIntakes?.length}
              />
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

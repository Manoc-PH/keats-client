import { View, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Store
import { actions } from "@app/core/store";
// Constants
import { BTN_VARIANTS, SIZES } from "@app/common/constants/styles";

import { Button, Title3 } from "@app/views/components";
import { ArrowLeftIcon } from "@app/assets/icons";
import themeColors from "@app/common/theme";

import { styles } from "./styles";

export default function IngredientDetailsHeader() {
  // Hooks
  const navigation = useNavigation();

  // Store Actions
  const { setSelectedIngredientID: sId, setIngredientDetails: sD } = actions;
  const dispatch = useDispatch();
  const setSelectedFoodID = (v) => dispatch(sId(v));
  const setFoodDetails = (v) => dispatch(sD(v));

  // Functions
  function handleBack() {
    setSelectedFoodID();
    setFoodDetails();
    navigation.navigate("Home", { screen: "AddIntake" });
  }

  // UseEffects

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <Button
            style={styles.btn}
            variant={BTN_VARIANTS.transparent}
            size={SIZES.Tiny}
            onPress={handleBack}>
            <ArrowLeftIcon
              height={22}
              width={22}
              color={themeColors.secondary}
            />
          </Button>
        </View>
        <View style={styles.navContainer}>
          <View style={styles.titleContainer}>
            <Title3>Ingredient Details</Title3>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

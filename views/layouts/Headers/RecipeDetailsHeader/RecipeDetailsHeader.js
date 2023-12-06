import { View, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Store
import { actions } from "@app/core/store";
// Constants
import { BTN_VARIANTS, FONT_SIZES, SIZES } from "@app/common/constants/styles";

import { Button, Title3 } from "@app/views/components";
import { ArrowLeftIcon } from "@app/assets/icons";

import { styles } from "./styles";

export default function RecipeDetailsHeader() {
  // Hooks
  const navigation = useNavigation();

  // Store Actions
  const { setSelectedRecipeID: sId } = actions;
  const dispatch = useDispatch();
  const setSelectedRecipeID = (v) => dispatch(sId(v));

  // Functions
  function handleBack() {
    setSelectedRecipeID();
    navigation.navigate("Recipes");
  }

  // UseEffects

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <Button
            variant={BTN_VARIANTS.transparent}
            size={SIZES.Large}
            onPress={handleBack}>
            <ArrowLeftIcon
              height={FONT_SIZES.Regular}
              width={FONT_SIZES.Regular}
            />
          </Button>
        </View>
        <View style={styles.navContainer}>
          <View style={styles.titleContainer}>
            <Title3>Recipe Details</Title3>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

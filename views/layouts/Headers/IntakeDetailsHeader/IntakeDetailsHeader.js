import { View, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Store
import { actions } from "@app/core/store";
// Constants
import { BTN_VARIANTS, SIZES } from "@app/common/constants/styles";

import { Button, Title3 } from "@app/views/components";
import { ArrowLeftIcon } from "@app/assets/icons";

import { styles } from "./styles";

export default function IntakeDetailsHeader() {
  // Hooks
  const navigation = useNavigation();

  // Store Actions
  const {
    setSelectedIntake: ssi,
    setSelectedIngredientID: sId,
    setSelectedIngredientMappingID: sMId,
    setIngredientDetails: sD,
  } = actions;
  const dispatch = useDispatch();
  const setSelectedIntake = (v) => dispatch(ssi(v));
  const setSelectedIngredientID = (v) => dispatch(sId(v));
  const setIngredientDetails = (v) => dispatch(sD(v));
  const setSelectedIngredientMappingID = (v) => dispatch(sMId(v));

  // Functions
  function handleBack() {
    setSelectedIntake();
    setIngredientDetails();
    setSelectedIngredientID();
    setSelectedIngredientMappingID();
    navigation.navigate("Home", { screen: "MyIntakes" });
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <Button
            variant={BTN_VARIANTS.transparent}
            size={SIZES.Tiny}
            onPress={handleBack}>
            <ArrowLeftIcon />
          </Button>
        </View>
        <View style={styles.navContainer}>
          <View style={styles.titleContainer}>
            <Title3>Intake Details</Title3>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

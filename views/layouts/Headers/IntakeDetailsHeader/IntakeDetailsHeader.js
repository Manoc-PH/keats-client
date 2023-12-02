import { View, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Store
import { actions } from "@app/core/store";
// Constants
import { BTN_VARIANTS, FONT_SIZES, SIZES } from "@app/common/constants/styles";

// Theme
import themeColors from "@app/common/theme";

// Components
import { Button, Title3 } from "@app/views/components";

// Icons
import { ArrowLeftIcon, DeleteIcon } from "@app/assets/icons";

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
    setIsDeleteIntakeModalVisible: sidiv,
  } = actions;
  const dispatch = useDispatch();
  const setSelectedIntake = (v) => dispatch(ssi(v));
  const setSelectedIngredientID = (v) => dispatch(sId(v));
  const setIngredientDetails = (v) => dispatch(sD(v));
  const setSelectedIngredientMappingID = (v) => dispatch(sMId(v));
  const setIsDeleteIntakeModalVisible = (v) => dispatch(sidiv(v));

  // Functions
  function handleBack() {
    setSelectedIntake();
    setIngredientDetails();
    setSelectedIngredientID();
    setSelectedIngredientMappingID();
    navigation.navigate("Common", { screen: "MyIntakes" });
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <View style={styles.titleContainer}>
            <Title3>Intake Details</Title3>
          </View>
        </View>
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
        <Button
          variant={BTN_VARIANTS.transparent}
          size={SIZES.Large}
          style={styles.btnRight}
          onPress={() => setIsDeleteIntakeModalVisible(true)}>
          <DeleteIcon color={themeColors.red} />
        </Button>
      </View>
    </SafeAreaView>
  );
}

import { View, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Store
import { actions } from "@app/core/store";
// Constants
import { BTN_VARIANTS, FONT_SIZES, SIZES } from "@app/common/constants/styles";

import { Button, Title3 } from "@app/views/components";
import { ArrowLeftIcon, DeleteIcon } from "@app/assets/icons";

import { styles } from "./styles";
import { useEffect, useState } from "react";
import { ReadCredentials } from "@app/services/db";
import themeColors from "@app/common/theme";

export default function RecipeDetailsHeader() {
  // Store State
  const { recipeOwnerId } = useSelector((state) => state.recipe);

  // Local State
  const [isOwner, setIsOwner] = useState();

  // Hooks
  const navigation = useNavigation();

  // Store Actions
  const {
    setSelectedRecipeID: sId,
    setRecipeOwnerId: sro,
    setIsDeleteRecipeModalVisible: sid,
  } = actions;
  const dispatch = useDispatch();
  const setSelectedRecipeID = (v) => dispatch(sId(v));
  const setRecipeOwnerId = (v) => dispatch(sro(v));
  const setIsDeleteRecipeModalVisible = (v) => dispatch(sid(v));

  // Functions
  function handleBack() {
    setSelectedRecipeID();
    setRecipeOwnerId();
    navigation.navigate("Recipes");
  }
  function handleDelete() {
    setIsDeleteRecipeModalVisible(true);
  }
  async function handleOwnerId() {
    const res = await ReadCredentials();
    if (res?.[0]?.id === recipeOwnerId) setIsOwner(true);
  }

  // UseEffects
  useEffect(() => {
    if (recipeOwnerId) handleOwnerId();
  }, [recipeOwnerId]);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Button
          style={{ ...styles.btnContainer }}
          variant={BTN_VARIANTS.transparent}
          onPress={handleBack}>
          <ArrowLeftIcon
            height={FONT_SIZES.Regular}
            width={FONT_SIZES.Regular}
          />
        </Button>

        <View style={styles.navContainer}>
          <View style={styles.titleContainer}>
            <Title3>Recipe Details</Title3>
          </View>
        </View>

        <Button
          style={{
            ...styles.btnContainer,
            opacity: isOwner ? 1 : 0,
          }}
          variant={BTN_VARIANTS.transparent}
          onPress={handleDelete}
          disabled={!isOwner}>
          <DeleteIcon color={themeColors.red} />
        </Button>
      </View>
    </SafeAreaView>
  );
}

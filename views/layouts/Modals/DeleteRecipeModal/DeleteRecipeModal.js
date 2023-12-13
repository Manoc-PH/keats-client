import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// Constants
import { BTN_VARIANTS } from "@app/common/constants/styles";
// Store
import { actions } from "@app/core/store";
// Hooks
import { useDeleteRecipe } from "@app/core/hooks/api";
// Components
import { Body, Button, Title2, CircleLoader } from "@app/views/components";
// styles
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function DeleteRecipeModal() {
  // Store State
  const { selectedRecipeID } = useSelector((state) => state.recipe);

  // Store Actions
  const { setIsDeleteRecipeModalVisible: sid, setIsRecipeHomeUpdated: sir } =
    actions;
  const dispatch = useDispatch();
  const setIsDeleteRecipeModalVisible = (value) => dispatch(sid(value));
  const setIsRecipeHomeUpdated = (value) => dispatch(sir(value));

  // Hooks
  const {
    deleteRecipe,
    deleteRecipeData,
    isDeleteRecipeLoading,
    deleteRecipeError,
  } = useDeleteRecipe();
  const navigation = useNavigation();

  function handleCancel() {
    setIsDeleteRecipeModalVisible(false);
  }
  function handleDelete() {
    deleteRecipe({ id: selectedRecipeID });
  }
  function handleSuccessfulDelete() {
    setIsDeleteRecipeModalVisible(false);
    setIsRecipeHomeUpdated(true);
    navigation.navigate("Main", { screen: "Recipes" });
  }

  useEffect(() => {
    if (deleteRecipeData) handleSuccessfulDelete();
  }, [deleteRecipeData]);
  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modalContainer}>
        {isDeleteRecipeLoading && <CircleLoader />}
        {!isDeleteRecipeLoading && !deleteRecipeError && (
          <>
            <Title2 style={styles.text}>
              Are you sure you want to delete your recipe?
            </Title2>
            <View style={styles.spacer} />
            <Body style={styles.text}>
              All of the reviews and likes will also be deleted and CANNOT be
              undone.
            </Body>
            <View style={styles.spacer} />
            <View style={styles.spacer} />
            <Button
              style={styles.btn}
              variant={BTN_VARIANTS.tertiary}
              onPress={handleDelete}>
              Confirm
            </Button>
            <View style={styles.smallSpacer} />
            <Button
              style={styles.btn}
              variant={BTN_VARIANTS.outlined}
              onPress={handleCancel}>
              Cancel
            </Button>
          </>
        )}
        {!isDeleteRecipeLoading && deleteRecipeError && (
          <>
            <Title2 style={styles.errorMsg}>
              An error occured in trying to delete recipe
            </Title2>
            <View style={styles.spacer} />
            <Button
              style={styles.btn}
              variant={BTN_VARIANTS.outlined}
              onPress={handleCancel}>
              Cancel
            </Button>
          </>
        )}
      </View>
    </View>
  );
}

export default DeleteRecipeModal;

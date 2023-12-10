import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// Constants
import { BTN_VARIANTS } from "@app/common/constants/styles";
// Store
import { actions } from "@app/core/store";
// Hooks
import { useDeleteRecipeLike } from "@app/core/hooks/api";
// Components
import { Body, Button, Title2, CircleLoader } from "@app/views/components";
// styles
import styles from "./styles";

function DeleteLikeModal() {
  // Store State
  const { selectedRecipeID } = useSelector((state) => state.recipe);

  // Store Actions
  const {
    setIsDeleteLikeModalVisible: sid,
    setIsRecipeUpdated: sir,
    setSelectedIntake: ssi,
    setDailyNutrients: sdn,
  } = actions;
  const dispatch = useDispatch();
  const setIsDeleteLikeModalVisible = (value) => dispatch(sid(value));
  const setIsRecipeUpdated = (value) => dispatch(sir(value));

  // Hooks
  const {
    deleteRecipeLike,
    deleteRecipeLikeData,
    isDeleteRecipeLikeLoading,
    deleteRecipeLikeError,
  } = useDeleteRecipeLike();

  function handleCancel() {
    setIsDeleteLikeModalVisible(false);
  }
  function handleDelete() {
    deleteRecipeLike({ recipe_id: selectedRecipeID });
  }
  function handleSuccessfulDelete() {
    setIsRecipeUpdated(true);
    setIsDeleteLikeModalVisible(false);
  }

  useEffect(() => {
    if (deleteRecipeLikeData) handleSuccessfulDelete();
  }, [deleteRecipeLikeData]);
  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modalContainer}>
        {isDeleteRecipeLikeLoading && <CircleLoader />}
        {!isDeleteRecipeLikeLoading && !deleteRecipeLikeError && (
          <>
            <Title2 style={styles.text}>
              Are you sure you want to delete your like?
            </Title2>
            <View style={styles.spacer} />
            <Body style={styles.text}>You can still like the recipe again</Body>
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
        {!isDeleteRecipeLikeLoading && deleteRecipeLikeError && (
          <>
            <Title2 style={styles.errorMsg}>
              An error occured in trying to delete intake
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

export default DeleteLikeModal;

import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Store
import { actions } from "@app/core/store";

// Hooks
import { useDeleteIntake } from "@app/core/hooks/api";

// Components
import { Body, Button, Title2, CircleLoader } from "@app/views/components";

// styles
import styles from "./styles";
import { BTN_VARIANTS } from "@app/common/constants/styles";

function DeleteIntakeModal() {
  // Store State
  const { selectedIntake, dailyIntakes, dailyNutrients } = useSelector(
    (state) => state.tracker
  );

  // Store Actions
  const {
    setIsDeleteIntakeModalVisible: sid,
    setDailyIntakes: sd,
    setSelectedIntake: ssi,
    setDailyNutrients: sdn,
  } = actions;
  const dispatch = useDispatch();
  const setIsDeleteIntakeModalVisible = (value) => dispatch(sid(value));
  const setDailyIntakes = (value) => dispatch(sd(value));
  const setSelectedIntake = (value) => dispatch(ssi(value));
  const setDailyNutrients = (value) => dispatch(sdn(value));

  // Hooks
  const {
    deleteIntake,
    deleteIntakeData,
    isDeleteIntakeError,
    isDeleteIntakeLoading,
    isDeleteIntakeSuccess,
  } = useDeleteIntake();
  const navigation = useNavigation();

  function handleCancel() {
    setIsDeleteIntakeModalVisible(false);
  }
  function handleDelete() {
    deleteIntake({ intake_id: selectedIntake?.id });
  }
  function handleSuccessfulDelete() {
    const newData = {
      ...dailyNutrients,
      calories:
        dailyNutrients.calories +
        deleteIntakeData.deleted_daily_nutrients.calories,
      protein:
        dailyNutrients.protein +
        deleteIntakeData.deleted_daily_nutrients.protein,
      carbs:
        dailyNutrients.carbs + deleteIntakeData.deleted_daily_nutrients.carbs,
      fats: dailyNutrients.fats + deleteIntakeData.deleted_daily_nutrients.fats,
    };
    const newIntakes = [];
    if (dailyIntakes && dailyIntakes?.length > 0) {
      dailyIntakes.forEach((item) => {
        if (item?.id !== selectedIntake.id) newIntakes.push(item);
      });
      newIntakes;
    }
    setDailyIntakes(newIntakes);
    setDailyNutrients(newData);
    setSelectedIntake();
    setIsDeleteIntakeModalVisible(false);
    navigation.navigate("Home", { screen: "HomeDefault" });
  }

  useEffect(() => {
    if (deleteIntakeData && isDeleteIntakeSuccess) {
      handleSuccessfulDelete();
    }
  }, [deleteIntakeData]);
  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modalContainer}>
        {isDeleteIntakeLoading && <CircleLoader />}
        {!isDeleteIntakeLoading && !isDeleteIntakeError && (
          <>
            <Title2 style={styles.text}>
              Are you sure you want to delete this intake?
            </Title2>
            <View style={styles.spacer} />
            <Body style={styles.text}>
              This action cannot be reversed and will permanently delete this
              intake.
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
        {!isDeleteIntakeLoading && isDeleteIntakeError && (
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

export default DeleteIntakeModal;

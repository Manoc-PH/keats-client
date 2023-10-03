import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Components
import Modal from "@app/views/components/Modal";

// Store
import { actions } from "@app/core/store";

// Hooks
import { useDeleteIntake } from "@app/core/hooks/api";

// Components
import { Body, Button, Title2 } from "@app/views/components";

// styles
import styles from "./styles";
import { BTN_VARIANTS } from "@app/common/constants/styles";

function DeleteIntakeModal() {
  // Store State
  const { isDeleteIntakeModalVisible } = useSelector((state) => state.ui);
  const { selectedIntake } = useSelector((state) => state.tracker);

  // Store Actions
  const { setIsDeleteIntakeModalVisible: sid } = actions;
  const dispatch = useDispatch();
  const setIsDeleteIntakeModalVisible = (value) => dispatch(sid(value));

  // Hooks
  const { deleteIntake, deleteIntakeData, isDeleteIntakeLoading } =
    useDeleteIntake();

  function handleCancel() {
    setIsDeleteIntakeModalVisible(false);
  }
  return (
    <View style={styles.wrapper}>
      <Modal
        isVisible={isDeleteIntakeModalVisible}
        setIsVisible={setIsDeleteIntakeModalVisible}
        content={
          <View style={styles.modalWrapper}>
            <View style={styles.modalContainer}>
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
              <Button style={styles.btn} variant={BTN_VARIANTS.tertiary}>
                Confirm
              </Button>
              <View style={styles.smallSpacer} />
              <Button
                style={styles.btn}
                variant={BTN_VARIANTS.outlined}
                onPress={handleCancel}>
                Cancel
              </Button>
            </View>
          </View>
        }
      />
    </View>
  );
}

export default DeleteIntakeModal;

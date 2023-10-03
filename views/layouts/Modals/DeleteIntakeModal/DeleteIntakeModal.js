import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Components
import Modal from "@app/views/components/Modal";

// Store
import { actions } from "@app/core/store";

// Hooks
import { useDeleteIntake } from "@app/core/hooks/api";

// styles
import styles from "./styles";
import { Body, Title3 } from "@app/views/components";

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

  deleteIntake;
  return (
    <View style={styles.wrapper}>
      <Modal
        isVisible={isDeleteIntakeModalVisible}
        setIsVisible={setIsDeleteIntakeModalVisible}
        content={
          <View style={styles.modalWrapper}>
            <View style={styles.modalContainer}>
              <Title3>Are you sure you want to delete this intake?</Title3>
              <View style={styles.spacer} />
              <Body>
                This action cannot be reversed and will permanently delete this
                intake.
              </Body>
            </View>
          </View>
        }
      />
    </View>
  );
}

export default DeleteIntakeModal;

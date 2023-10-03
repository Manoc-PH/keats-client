import { View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

// Layouts
import { DeleteIntakeModal, ProgressInfoModal } from "@app/views/layouts";

import styles from "./styles";
function Modals() {
  // Store State
  const { isDeleteIntakeModalVisible, isProgressInfoModalVisible } =
    useSelector((state) => state.ui);
  const isVisible = isDeleteIntakeModalVisible || isProgressInfoModalVisible;

  if (!isVisible) return;

  // TODO OPTIMIZE THIS BY MOVING THE MODAL COMPONENT HERE
  return (
    <View style={styles.wrapper}>
      <DeleteIntakeModal />
      <ProgressInfoModal />
    </View>
  );
}

export default Modals;

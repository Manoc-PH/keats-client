import { View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

// Layouts
import { DeleteIntakeModal } from "@app/views/layouts";

import styles from "./styles";
function Modals() {
  // Store State
  const { isDeleteIntakeModalVisible } = useSelector((state) => state.ui);
  const isVisible = isDeleteIntakeModalVisible;

  if (!isVisible) return;

  return (
    <View style={styles.wrapper}>
      <DeleteIntakeModal />
    </View>
  );
}

export default Modals;

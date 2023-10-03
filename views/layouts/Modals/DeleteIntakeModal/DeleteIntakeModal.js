import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import Modal from "@app/views/components/Modal";

function DeleteIntakeModal() {
  const [defaultModalVisible, setDefaultModalVisible] = useState(true);
  return (
    <View style={styles.wrapper}>
      <Modal
        isVisible={defaultModalVisible}
        setIsVisible={setDefaultModalVisible}
      />
    </View>
  );
}

export default DeleteIntakeModal;

import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Layouts
import { DeleteIntakeModal, ProgressInfoModal } from "@app/views/layouts";

// Components
import Modal from "@app/views/components/Modal";

import styles from "./styles";
function Modals() {
  // Store State
  const { isDeleteIntakeModalVisible, isProgressInfoModalVisible } =
    useSelector((state) => state.ui);
  const [isVisible, setIsVisible] = useState(
    isDeleteIntakeModalVisible || isProgressInfoModalVisible
  );

  useEffect(() => {
    if (isDeleteIntakeModalVisible || isProgressInfoModalVisible) {
      setIsVisible(true);
    }
    if (!isDeleteIntakeModalVisible && !isProgressInfoModalVisible) {
      setIsVisible(false);
    }
  }, [isDeleteIntakeModalVisible, isProgressInfoModalVisible]);
  return (
    <View style={styles.wrapper}>
      <Modal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        content={
          <>
            {isDeleteIntakeModalVisible && <DeleteIntakeModal />}
            {isProgressInfoModalVisible && <ProgressInfoModal />}
          </>
        }
      />
    </View>
  );
}

export default Modals;

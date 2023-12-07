import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Layouts
import {
  DeleteIntakeModal,
  ProgressInfoModal,
  ReviewRecipeModal,
} from "@app/views/layouts";

// Components
import Modal from "@app/views/components/Modal";

import styles from "./styles";
function Modals() {
  // Store State
  const {
    isDeleteIntakeModalVisible,
    isProgressInfoModalVisible,
    isReviewRecipeModalVisible,
  } = useSelector((state) => state.ui);
  const [isVisible, setIsVisible] = useState(
    isDeleteIntakeModalVisible || isProgressInfoModalVisible
  );

  useEffect(() => {
    if (
      isDeleteIntakeModalVisible ||
      isProgressInfoModalVisible ||
      isReviewRecipeModalVisible
    ) {
      setIsVisible(true);
    }
    if (
      !isDeleteIntakeModalVisible &&
      !isProgressInfoModalVisible &&
      !isReviewRecipeModalVisible
    ) {
      setIsVisible(false);
    }
  }, [
    isDeleteIntakeModalVisible,
    isProgressInfoModalVisible,
    isReviewRecipeModalVisible,
  ]);
  return (
    <View style={styles.wrapper}>
      <Modal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        content={
          <>
            {isDeleteIntakeModalVisible && <DeleteIntakeModal />}
            {isProgressInfoModalVisible && <ProgressInfoModal />}
            {isReviewRecipeModalVisible && <ReviewRecipeModal />}
          </>
        }
      />
    </View>
  );
}

export default Modals;

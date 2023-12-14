import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Layouts
import {
  DeleteIntakeModal,
  ProgressInfoModal,
  ReviewRecipeModal,
  DeleteLikeModal,
  DeleteRecipeModal,
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
    isDeleteLikeModalVisible,
    isDeleteRecipeModalVisible,
  } = useSelector((state) => state.ui);
  const [isVisible, setIsVisible] = useState(
    isDeleteIntakeModalVisible || isProgressInfoModalVisible
  );

  useEffect(() => {
    if (
      isDeleteIntakeModalVisible ||
      isProgressInfoModalVisible ||
      isReviewRecipeModalVisible ||
      isDeleteLikeModalVisible ||
      isDeleteRecipeModalVisible
    ) {
      setIsVisible(true);
    }
    if (
      !isDeleteIntakeModalVisible &&
      !isProgressInfoModalVisible &&
      !isReviewRecipeModalVisible &&
      !isDeleteLikeModalVisible &&
      !isDeleteRecipeModalVisible
    ) {
      setIsVisible(false);
    }
  }, [
    isDeleteIntakeModalVisible,
    isProgressInfoModalVisible,
    isReviewRecipeModalVisible,
    isDeleteLikeModalVisible,
    isDeleteRecipeModalVisible,
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
            {isDeleteLikeModalVisible && <DeleteLikeModal />}
            {isDeleteRecipeModalVisible && <DeleteRecipeModal />}
          </>
        }
      />
    </View>
  );
}

export default Modals;

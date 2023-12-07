import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Store
import { actions } from "@app/core/store";

// Hooks
import { useDeleteIntake } from "@app/core/hooks/api";

// Components
import {
  Body,
  Button,
  Title2,
  CircleLoader,
  StarRating,
} from "@app/views/components";

// styles
import styles from "./styles";
import { BTN_VARIANTS } from "@app/common/constants/styles";

function ReviewRecipeModal() {
  // Store State
  const {} = useSelector((state) => state.tracker);

  // Store Actions
  // const { setIsDeleteIntakeModalVisible: sid } = actions;
  // const dispatch = useDispatch();
  // const setIsDeleteIntakeModalVisible = (value) => dispatch(sid(value));

  // Local State
  const [count, setCount] = useState();
  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modalContainer}>
        {/* {isDeleteIntakeLoading && <CircleLoader />} */}
        {
          <>
            <Title2 style={styles.text}>Add Review</Title2>
            <View style={styles.spacer} />
            <StarRating editable setCount={setCount} />
            {/* <Body style={styles.text}>
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
            </Button> */}
          </>
        }
        {/* {!isDeleteIntakeLoading && isDeleteIntakeError && (
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
        )} */}
      </View>
    </View>
  );
}

export default ReviewRecipeModal;

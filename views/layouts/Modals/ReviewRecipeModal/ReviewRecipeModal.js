import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Store
import { actions } from "@app/core/store";

// Hooks
import { useDeleteIntake, useGetRecipeReview } from "@app/core/hooks/api";

// Components
import {
  Body,
  Button,
  Title2,
  CircleLoader,
  StarRating,
  TextInput,
} from "@app/views/components";

// styles
import styles from "./styles";
import { BTN_VARIANTS } from "@app/common/constants/styles";

function ReviewRecipeModal() {
  // Store State
  const { selectedRecipeID, isReviewEdit } = useSelector(
    (state) => state.recipe
  );

  // Store Actions
  const { setIsReviewRecipeModalVisible: sid, setIsReviewEdit: ser } = actions;
  const dispatch = useDispatch();
  const setIsReviewRecipeModalVisible = (value) => dispatch(sid(value));
  const setIsReviewEdit = (value) => dispatch(ser(value));

  // Local State
  const [count, setCount] = useState(0);
  const [value, onChangeText] = useState();
  const [reviewId, setReviewId] = useState();

  // Hooks
  const { getRecipeReview, getRecipeReviewData, isGetRecipeReviewLoading } =
    useGetRecipeReview();

  // Functions
  function handleCancel() {
    setIsReviewRecipeModalVisible();
    setCount(0);
    onChangeText("");
    setIsReviewEdit();
  }
  function handleSave() {}

  // UseEffects
  useEffect(() => {
    if (isReviewEdit) getRecipeReview({ recipe_id: selectedRecipeID });
  }, [selectedRecipeID]);
  useEffect(() => {
    if (getRecipeReviewData) {
      setCount(getRecipeReviewData.rating);
      onChangeText(getRecipeReviewData.description);
      setReviewId(getRecipeReviewData.id);
    }
  }, [getRecipeReviewData]);
  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modalContainer}>
        {/* {isDeleteIntakeLoading && <CircleLoader />} */}
        {
          <>
            <Title2 style={styles.text}>Add Review</Title2>
            <StarRating rating={count} editable setCount={setCount} />
            <TextInput
              value={value}
              onChangeText={onChangeText}
              placeholder='Write your review here'
              label='Review'
              multiline
            />
            <View style={styles.rowContainer}>
              <Button
                style={styles.btn}
                variant={BTN_VARIANTS.outlined}
                onPress={handleCancel}>
                Cancel
              </Button>
              <Button
                style={styles.btn}
                variant={BTN_VARIANTS.primary}
                onPress={handleCancel}>
                Save
              </Button>
            </View>
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

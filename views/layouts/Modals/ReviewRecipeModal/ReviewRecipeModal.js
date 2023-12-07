import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Store
import { actions } from "@app/core/store";

// Hooks
import {
  useGetRecipeReview,
  usePatchRecipeReview,
  usePostRecipeReview,
} from "@app/core/hooks/api";

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
  const {
    setIsReviewRecipeModalVisible: sid,
    setIsReviewEdit: ser,
    setIsRecipeUpdated: siru,
  } = actions;
  const dispatch = useDispatch();
  const setIsReviewRecipeModalVisible = (value) => dispatch(sid(value));
  const setIsReviewEdit = (value) => dispatch(ser(value));
  const setIsRecipeUpdated = (value) => dispatch(siru(value));

  // Local State
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState();
  const [reviewId, setReviewId] = useState();

  // Hooks
  const {
    postRecipeReview,
    postRecipeReviewData,
    isPostRecipeReviewLoading,
    isPostRecipeReviewError,
  } = usePostRecipeReview();
  const {
    getRecipeReview,
    getRecipeReviewData,
    isGetRecipeReviewLoading,
    isGetRecipeReviewError,
  } = useGetRecipeReview();
  const {
    patchRecipeReview,
    patchRecipeReviewData,
    isPatchRecipeReviewLoading,
    isPatchRecipeReviewError,
  } = usePatchRecipeReview();

  // Constants
  const loading =
    isGetRecipeReviewLoading ||
    isPatchRecipeReviewLoading ||
    isPostRecipeReviewLoading;

  const error =
    isPostRecipeReviewError ||
    isGetRecipeReviewError ||
    isPatchRecipeReviewError;

  // Functions
  function handleCancel() {
    setIsReviewRecipeModalVisible();
    setRating(0);
    setDescription("");
    setIsReviewEdit();
  }
  function handleSave() {
    if (isReviewEdit) {
      patchRecipeReview({
        id: reviewId,
        description: description,
        rating: rating,
        recipe_id: selectedRecipeID,
      });
    }
    if (!isReviewEdit) {
      postRecipeReview({
        // description: description,
        // rating: rating,
        // recipe_id: selectedRecipeID,
      });
    }
  }
  function handleSuccessfullSave() {
    if (postRecipeReviewData || patchRecipeReviewData) {
      setIsRecipeUpdated(true);
      setIsReviewRecipeModalVisible();
      setRating(0);
      setDescription("");
      setIsReviewEdit();
    }
  }

  // UseEffects
  useEffect(() => {
    if (isReviewEdit) getRecipeReview({ recipe_id: selectedRecipeID });
  }, [selectedRecipeID]);
  useEffect(() => {
    if (getRecipeReviewData) {
      setRating(getRecipeReviewData.rating);
      setDescription(getRecipeReviewData.description);
      setReviewId(getRecipeReviewData.id);
    }
  }, [getRecipeReviewData]);
  useEffect(() => {
    handleSuccessfullSave();
  }, [postRecipeReviewData, patchRecipeReviewData]);
  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modalContainer}>
        {loading && <CircleLoader />}
        {!loading && (
          <>
            {!loading && error ? (
              <Title2 style={styles.errorMsg}>Could not save review</Title2>
            ) : (
              <Title2 style={styles.text}>
                {isReviewEdit ? "Edit Review" : "Add Review"}
              </Title2>
            )}

            <StarRating rating={rating} editable setCount={setRating} />
            <TextInput
              value={description}
              onChangeText={setDescription}
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
                onPress={handleSave}>
                Save
              </Button>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

export default ReviewRecipeModal;

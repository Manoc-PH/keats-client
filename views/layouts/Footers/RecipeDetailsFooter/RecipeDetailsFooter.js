import { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
// Store
import { actions } from "@app/core/store";
// Hooks
import { useGetRecipeActions, usePostRecipeLike } from "@app/core/hooks/api";
// Components
import { Body, Button, CircleLoader, SliderInput } from "@app/views/components";

import { styles } from "./styles";
import { BTN_VARIANTS } from "@app/common/constants/styles";

export default function RecipeDetailsFooter(props) {
  const { recipe_id, isRecipeUpdated } = props;
  // Store Actions
  const {
    setAddedLike: sfa,
    setIsReviewRecipeModalVisible: sir,
    setIsReviewEdit: ser,
    setIsRecipeUpdated: siru,
    setIsDeleteLikeModalVisible: sid,
  } = actions;
  const dispatch = useDispatch();
  const setAddedLike = (value) => dispatch(sfa(value));
  const setIsReviewRecipeModalVisible = (value) => dispatch(sir(value));
  const setIsReviewEdit = (value) => dispatch(ser(value));
  const setIsRecipeUpdated = (value) => dispatch(siru(value));
  const setIsDeleteLikeModalVisible = (value) => dispatch(sid(value));

  // Hooks
  const { getRecipeActions, getRecipeActionsData, isGetRecipeActionsLoading } =
    useGetRecipeActions();
  const { postRecipeLike, postRecipeLikeData, isPostRecipeLikeLoading } =
    usePostRecipeLike();

  // Local State
  const [recipeActions, setRecipeActions] = useState();

  // Constants
  const loading = isPostRecipeLikeLoading || isGetRecipeActionsLoading;
  // Functions
  function handleLike() {
    if (!recipeActions?.liked) {
      postRecipeLike({ recipe_id });
    } else if (recipeActions?.liked) {
      setIsDeleteLikeModalVisible(true);
    }
  }
  function handleSuccessfullLike() {
    setAddedLike(true);
    setRecipeActions({ ...recipeActions, liked: true });
  }
  function handleReview() {
    if (recipeActions?.reviewed) setIsReviewEdit(true);
    setIsRecipeUpdated(false);
    setIsReviewRecipeModalVisible(true);
  }

  // UseEffects
  useEffect(() => {
    getRecipeActions({ recipe_id });
  }, [recipe_id]);
  useEffect(() => {
    if (isRecipeUpdated) getRecipeActions({ recipe_id });
  }, [isRecipeUpdated]);
  useEffect(() => {
    if (getRecipeActionsData) setRecipeActions(getRecipeActionsData);
  }, [getRecipeActionsData]);
  useEffect(() => {
    if (postRecipeLikeData) handleSuccessfullLike();
  }, [postRecipeLikeData]);
  return (
    <SafeAreaView style={styles.wrapper}>
      {!loading && recipeActions && (
        <View style={styles.container}>
          <Button
            style={styles.btn}
            onPress={handleLike}
            variant={
              recipeActions?.liked
                ? BTN_VARIANTS.outlined
                : BTN_VARIANTS.primary
            }>
            {recipeActions?.liked ? "Liked" : "Like"}
          </Button>
          <Button
            style={styles.btn}
            variant={
              recipeActions?.reviewed
                ? BTN_VARIANTS.outlined
                : BTN_VARIANTS.primary
            }
            onPress={handleReview}>
            {recipeActions?.reviewed ? "Edit Review" : "Review"}
          </Button>
        </View>
      )}
      {loading && <CircleLoader />}
    </SafeAreaView>
  );
}

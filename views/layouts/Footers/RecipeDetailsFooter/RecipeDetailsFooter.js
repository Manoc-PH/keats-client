import { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
// Services
import { ReadCredentials } from "@app/services/db";
// Store
import { actions } from "@app/core/store";
// Hooks
import { useGetRecipeActions, usePostRecipeLike } from "@app/core/hooks/api";
// Components
import { Body, Button, CircleLoader, SliderInput } from "@app/views/components";
// Constants
import { BTN_VARIANTS } from "@app/common/constants/styles";

import { styles } from "./styles";

export default function RecipeDetailsFooter(props) {
  const { recipe_id, isRecipeUpdated } = props;
  // Store State
  const { recipeOwnerId } = useSelector((state) => state.recipe);
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
  const navigation = useNavigation();

  // Local State
  const [recipeActions, setRecipeActions] = useState();
  const [isOwner, setIsOwner] = useState();

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
    if (!isOwner) {
      setAddedLike(true);
      setRecipeActions({ ...recipeActions, liked: true });
    }
  }
  function handleReview() {
    if (!isOwner) {
      if (recipeActions?.reviewed) setIsReviewEdit(true);
      setIsRecipeUpdated(false);
      setIsReviewRecipeModalVisible(true);
    }
  }
  async function handleOwnerId() {
    const res = await ReadCredentials();
    if (res?.[0]?.id === recipeOwnerId) setIsOwner(true);
  }
  function handleEditRecipe() {
    navigation.navigate("Common", { screen: "EditRecipe" });
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
  useEffect(() => {
    handleOwnerId();
  }, [recipeOwnerId]);
  return (
    <SafeAreaView style={styles.wrapper}>
      {!loading && recipeActions && !isOwner && (
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
      {!loading && isOwner && (
        <View style={styles.container}>
          <Button
            style={styles.btn}
            onPress={handleEditRecipe}
            variant={BTN_VARIANTS.outlined}>
            Edit Recipe
          </Button>
        </View>
      )}
      {loading && <CircleLoader />}
    </SafeAreaView>
  );
}

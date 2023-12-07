import { useEffect, useRef, useState } from "react";
import { View, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
// Utils
import { debounce } from "@app/common/utils/debounce";
// Store
import { actions } from "@app/core/store";
// Hooks
import { useGetRecipeActions } from "@app/core/hooks/api";
// Components
import { Body, Button, CircleLoader, SliderInput } from "@app/views/components";

import { styles } from "./styles";
import { BTN_VARIANTS } from "@app/common/constants/styles";

export default function RecipeDetailsFooter(props) {
  const { recipe_id } = props;
  // Store Actions
  const { setSelectedFoodAmount: sfa } = actions;
  const dispatch = useDispatch();
  const setSelectedFoodAmount = (value) => dispatch(sfa(value));

  // Hooks
  const { getRecipeActions, getRecipeActionsData, isGetRecipeActionsLoading } =
    useGetRecipeActions();
  // Local State
  const [recipeActions, setRecipeActions] = useState();

  useEffect(() => {
    getRecipeActions({ recipe_id });
  }, [recipe_id]);
  useEffect(() => {
    if (getRecipeActionsData) {
      setRecipeActions(getRecipeActionsData);
    }
  }, [getRecipeActionsData]);
  return (
    <SafeAreaView style={styles.wrapper}>
      {!isGetRecipeActionsLoading && recipeActions && (
        <View style={styles.container}>
          <Button
            style={styles.btn}
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
            }>
            {recipeActions?.reviewed ? "Edit Review" : "Review"}
          </Button>
        </View>
      )}
      {isGetRecipeActionsLoading && <CircleLoader />}
    </SafeAreaView>
  );
}

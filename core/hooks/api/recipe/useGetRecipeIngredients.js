import { useMutation } from "react-query";

// Services
import { GetRecipeIngredients } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: getRecipeIngredients,
    data: getRecipeIngredientsData,
    error: getRecipeIngredientsError,
    isLoading: isGetRecipeIngredientsLoading,
    isSuccess: isGetRecipeIngredientsSuccess,
    isError: isGetRecipeIngredientsError,
  } = useMutation(GetRecipeIngredients);

  return {
    getRecipeIngredients,
    getRecipeIngredientsData,
    getRecipeIngredientsError,
    isGetRecipeIngredientsLoading,
    isGetRecipeIngredientsSuccess,
    isGetRecipeIngredientsError,
  };
};

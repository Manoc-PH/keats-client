import { useMutation } from "react-query";

// Services
import { GetRecipe } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: getRecipe,
    data: getRecipeData,
    error: getRecipeError,
    isLoading: isGetRecipeLoading,
    isSuccess: isGetRecipeSuccess,
    isError: isGetRecipeError,
  } = useMutation(GetRecipe);

  return {
    getRecipe,
    getRecipeData,
    getRecipeError,
    isGetRecipeLoading,
    isGetRecipeSuccess,
    isGetRecipeError,
  };
};

import { useMutation } from "react-query";

// Services
import { PatchRecipe } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: patchRecipe,
    data: patchRecipeData,
    error: patchRecipeError,
    isLoading: isPatchRecipeLoading,
    isSuccess: isPatchRecipeSuccess,
    isError: isPatchRecipeError,
  } = useMutation(PatchRecipe);

  return {
    patchRecipe,
    patchRecipeData,
    patchRecipeError,
    isPatchRecipeLoading,
    isPatchRecipeSuccess,
    isPatchRecipeError,
  };
};

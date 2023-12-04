import { useMutation } from "react-query";

// Services
import { DeleteRecipe } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: deleteRecipe,
    data: deleteRecipeData,
    error: deleteRecipeError,
    isLoading: isDeleteRecipeLoading,
    isSuccess: isDeleteRecipeSuccess,
    isError: isDeleteRecipeError,
  } = useMutation(DeleteRecipe);

  return {
    deleteRecipe,
    deleteRecipeData,
    deleteRecipeError,
    isDeleteRecipeLoading,
    isDeleteRecipeSuccess,
    isDeleteRecipeError,
  };
};

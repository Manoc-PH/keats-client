import { useMutation } from "react-query";

// Services
import { PostRecipe } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: postRecipe,
    data: postRecipeData,
    error: postRecipeError,
    isLoading: isPostRecipeLoading,
    isSuccess: isPostRecipeSuccess,
    isError: isPostRecipeError,
  } = useMutation(PostRecipe);

  return {
    postRecipe,
    postRecipeData,
    postRecipeError,
    isPostRecipeLoading,
    isPostRecipeSuccess,
    isPostRecipeError,
  };
};

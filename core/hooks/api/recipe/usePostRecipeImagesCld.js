import { useMutation } from "react-query";

// Services
import { PostRecipeImagesCld } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: postRecipeImagesCld,
    data: postRecipeImagesCldData,
    error: postRecipeImagesCldError,
    isLoading: isPostRecipeImagesCldLoading,
    isSuccess: isPostRecipeImagesCldSuccess,
    isError: isPostRecipeImagesCldError,
  } = useMutation(PostRecipeImagesCld);

  return {
    postRecipeImagesCld,
    postRecipeImagesCldData,
    postRecipeImagesCldError,
    isPostRecipeImagesCldLoading,
    isPostRecipeImagesCldSuccess,
    isPostRecipeImagesCldError,
  };
};

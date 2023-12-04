import { useMutation } from "react-query";

// Services
import { PostRecipeImages } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: postRecipeImages,
    data: postRecipeImagesData,
    error: postRecipeImagesError,
    isLoading: isPostRecipeImagesLoading,
    isSuccess: isPostRecipeImagesSuccess,
    isError: isPostRecipeImagesError,
  } = useMutation(PostRecipeImages);

  return {
    postRecipeImages,
    postRecipeImagesData,
    postRecipeImagesError,
    isPostRecipeImagesLoading,
    isPostRecipeImagesSuccess,
    isPostRecipeImagesError,
  };
};

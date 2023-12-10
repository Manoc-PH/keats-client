import { useMutation } from "react-query";

// Services
import { PostRecipeReview } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: postRecipeReview,
    data: postRecipeReviewData,
    error: postRecipeReviewError,
    isLoading: isPostRecipeReviewLoading,
    isSuccess: isPostRecipeReviewSuccess,
    isError: isPostRecipeReviewError,
  } = useMutation(PostRecipeReview);

  return {
    postRecipeReview,
    postRecipeReviewData,
    postRecipeReviewError,
    isPostRecipeReviewLoading,
    isPostRecipeReviewSuccess,
    isPostRecipeReviewError,
  };
};

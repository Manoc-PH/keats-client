import { useMutation } from "react-query";

// Services
import { DeleteRecipeReview } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: deleteRecipeReview,
    data: deleteRecipeReviewData,
    error: deleteRecipeReviewError,
    isLoading: isDeleteRecipeReviewLoading,
    isSuccess: isDeleteRecipeReviewSuccess,
    isError: isDeleteRecipeReviewError,
  } = useMutation(DeleteRecipeReview);

  return {
    deleteRecipeReview,
    deleteRecipeReviewData,
    deleteRecipeReviewError,
    isDeleteRecipeReviewLoading,
    isDeleteRecipeReviewSuccess,
    isDeleteRecipeReviewError,
  };
};

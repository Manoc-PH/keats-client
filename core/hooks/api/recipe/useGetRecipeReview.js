import { useMutation } from "react-query";

// Services
import { GetRecipeReview } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: getRecipeReview,
    data: getRecipeReviewData,
    error: getRecipeReviewError,
    isLoading: isGetRecipeReviewLoading,
    isSuccess: isGetRecipeReviewSuccess,
    isError: isGetRecipeReviewError,
  } = useMutation(GetRecipeReview);

  return {
    getRecipeReview,
    getRecipeReviewData,
    getRecipeReviewError,
    isGetRecipeReviewLoading,
    isGetRecipeReviewSuccess,
    isGetRecipeReviewError,
  };
};

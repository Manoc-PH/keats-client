import { useMutation } from "react-query";

// Services
import { PatchRecipeReview } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: patchRecipeReview,
    data: patchRecipeReviewData,
    error: patchRecipeReviewError,
    isLoading: isPatchRecipeReviewLoading,
    isSuccess: isPatchRecipeReviewSuccess,
    isError: isPatchRecipeReviewError,
  } = useMutation(PatchRecipeReview);

  return {
    patchRecipeReview,
    patchRecipeReviewData,
    patchRecipeReviewError,
    isPatchRecipeReviewLoading,
    isPatchRecipeReviewSuccess,
    isPatchRecipeReviewError,
  };
};

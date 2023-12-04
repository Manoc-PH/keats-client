import { useMutation } from "react-query";

// Services
import { GetRecipeReviews } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: getRecipeReviews,
    data: getRecipeReviewsData,
    error: getRecipeReviewsError,
    isLoading: isGetRecipeReviewsLoading,
    isSuccess: isGetRecipeReviewsSuccess,
    isError: isGetRecipeReviewsError,
  } = useMutation(GetRecipeReviews);

  return {
    getRecipeReviews,
    getRecipeReviewsData,
    getRecipeReviewsError,
    isGetRecipeReviewsLoading,
    isGetRecipeReviewsSuccess,
    isGetRecipeReviewsError,
  };
};

import { useMutation } from "react-query";

// Services
import { GetIngredientDetails } from "@app/services/api/Ingredient";

export default () => {
  const {
    mutate: getIngredientDetails,
    data: getIngredientDetailsData,
    error: getIngredientDetailsError,
    isLoading: isGetIngredientDetailsLoading,
    isSuccess: isGetIngredientDetailsSuccess,
    isError: isGetIngredientDetailsError,
  } = useMutation(GetIngredientDetails);

  return {
    getIngredientDetails,
    getIngredientDetailsData,
    getIngredientDetailsError,
    isGetIngredientDetailsLoading,
    isGetIngredientDetailsSuccess,
    isGetIngredientDetailsError,
  };
};

import { useMutation } from "react-query";

// Services
import { GetSearchIngredient } from "@app/services/api/Consumer/Ingredient";

export default () => {
  const {
    mutate: getSearchIngredient,
    data: getSearchIngredientData,
    error: getSearchIngredientError,
    isLoading: isGetSearchIngredientLoading,
    isSuccess: isGetSearchIngredientSuccess,
    isError: isGetSearchIngredientError,
  } = useMutation(GetSearchIngredient);

  return {
    getSearchIngredient,
    getSearchIngredientData,
    getSearchIngredientError,
    isGetSearchIngredientLoading,
    isGetSearchIngredientSuccess,
    isGetSearchIngredientError,
  };
};

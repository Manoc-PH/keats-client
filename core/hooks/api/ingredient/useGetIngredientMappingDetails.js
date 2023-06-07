import { useMutation } from "react-query";

// Services
import { GetIngredientMappingDetails } from "@app/services/api/Ingredient";

export default () => {
  const {
    mutate: getIngredientMappingDetails,
    data: getIngredientMappingDetailsData,
    error: getIngredientMappingDetailsError,
    isLoading: isGetIngredientMappingDetailsLoading,
    isSuccess: isGetIngredientMappingDetailsSuccess,
    isError: isGetIngredientMappingDetailsError,
  } = useMutation(GetIngredientMappingDetails);

  return {
    getIngredientMappingDetails,
    getIngredientMappingDetailsData,
    getIngredientMappingDetailsError,
    isGetIngredientMappingDetailsLoading,
    isGetIngredientMappingDetailsSuccess,
    isGetIngredientMappingDetailsError,
  };
};

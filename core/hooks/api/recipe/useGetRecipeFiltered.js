import { useMutation } from "react-query";

// Services
import { GetRecipeFiltered } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: getRecipeFiltered,
    data: getRecipeFilteredData,
    error: getRecipeFilteredError,
    isLoading: isGetRecipeFilteredLoading,
    isSuccess: isGetRecipeFilteredSuccess,
    isError: isGetRecipeFilteredError,
  } = useMutation(GetRecipeFiltered);

  return {
    getRecipeFiltered,
    getRecipeFilteredData,
    getRecipeFilteredError,
    isGetRecipeFilteredLoading,
    isGetRecipeFilteredSuccess,
    isGetRecipeFilteredError,
  };
};

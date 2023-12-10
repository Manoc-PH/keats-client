import { useMutation } from "react-query";

// Services
import { GetRecipeSearch } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: getRecipeSearch,
    data: getRecipeSearchData,
    error: getRecipeSearchError,
    isLoading: isGetRecipeSearchLoading,
    isSuccess: isGetRecipeSearchSuccess,
    isError: isGetRecipeSearchError,
  } = useMutation(GetRecipeSearch);

  return {
    getRecipeSearch,
    getRecipeSearchData,
    getRecipeSearchError,
    isGetRecipeSearchLoading,
    isGetRecipeSearchSuccess,
    isGetRecipeSearchError,
  };
};

import { useMutation } from "react-query";

// Services
import { GetSearchFood } from "@app/services/api/Food";

export default () => {
  const {
    mutate: getSearchFood,
    data: getSearchFoodData,
    error: getSearchFoodError,
    isLoading: isGetSearchFoodLoading,
    isSuccess: isGetSearchFoodSuccess,
    isError: isGetSearchFoodError,
  } = useMutation(GetSearchFood);

  return {
    getSearchFood,
    getSearchFoodData,
    getSearchFoodError,
    isGetSearchFoodLoading,
    isGetSearchFoodSuccess,
    isGetSearchFoodError,
  };
};

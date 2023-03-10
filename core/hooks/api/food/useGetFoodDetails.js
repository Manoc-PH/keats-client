import { useMutation } from "react-query";

// Services
import { GetFoodDetails } from "@app/services/api/Food";

export default () => {
  const {
    mutate: getFoodDetails,
    data: getFoodDetailsData,
    error: getFoodDetailsError,
    isLoading: isGetFoodDetailsLoading,
    isSuccess: isGetFoodDetailsSuccess,
    isError: isGetFoodDetailsError,
  } = useMutation(GetFoodDetails);

  return {
    getFoodDetails,
    getFoodDetailsData,
    getFoodDetailsError,
    isGetFoodDetailsLoading,
    isGetFoodDetailsSuccess,
    isGetFoodDetailsError,
  };
};

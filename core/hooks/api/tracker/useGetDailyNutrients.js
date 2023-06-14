import { useMutation } from "react-query";

// Services
import { GetDailyNutrients } from "@app/services/api/Consumer/Tracker";

export default () => {
  const {
    mutate: getDailyNutrients,
    data: getDailyNutrientsData,
    error: getDailyNutrientsError,
    isLoading: isGetDailyNutrientsLoading,
    isSuccess: isGetDailyNutrientsSuccess,
    isError: isGetDailyNutrientsError,
  } = useMutation(GetDailyNutrients);

  return {
    getDailyNutrients,
    getDailyNutrientsData,
    getDailyNutrientsError,
    isGetDailyNutrientsLoading,
    isGetDailyNutrientsSuccess,
    isGetDailyNutrientsError,
  };
};

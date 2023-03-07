import { useMutation } from "react-query";

// Services
import { GetDailyNutrientsList } from "@app/services/api/Tracker";

export default () => {
  const {
    mutate: getDailyNutrientsList,
    data: getDailyNutrientsListData,
    error: getDailyNutrientsListError,
    isLoading: isGetDailyNutrientsListLoading,
    isSuccess: isGetDailyNutrientsListSuccess,
    isError: isGetDailyNutrientsListError,
  } = useMutation(GetDailyNutrientsList);

  return {
    getDailyNutrientsList,
    getDailyNutrientsListData,
    getDailyNutrientsListError,
    isGetDailyNutrientsListLoading,
    isGetDailyNutrientsListSuccess,
    isGetDailyNutrientsListError,
  };
};

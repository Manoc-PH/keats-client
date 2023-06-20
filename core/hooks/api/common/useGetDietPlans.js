import { useMutation } from "react-query";

// Services
import { GetDietPlans } from "@app/services/api/Consumer/Common";

export default () => {
  const {
    mutate: getDietPlans,
    data: getDietPlansData,
    error: getDietPlansError,
    isLoading: isGetDietPlansLoading,
    isSuccess: isGetDietPlansSuccess,
    isError: isGetDietPlansError,
  } = useMutation(GetDietPlans);

  return {
    getDietPlans,
    getDietPlansData,
    getDietPlansError,
    isGetDietPlansLoading,
    isGetDietPlansSuccess,
    isGetDietPlansError,
  };
};

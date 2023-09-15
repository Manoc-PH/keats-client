import { useMutation } from "react-query";

// Services
import { GetCommonIntakes } from "@app/services/api/Consumer/Tracker";

export default () => {
  const {
    mutate: getCommonIntakes,
    data: getCommonIntakesData,
    error: getCommonIntakesError,
    isLoading: isGetCommonIntakesLoading,
    isSuccess: isGetCommonIntakesSuccess,
    isError: isGetCommonIntakesError,
  } = useMutation(GetCommonIntakes);

  return {
    getCommonIntakes,
    getCommonIntakesData,
    getCommonIntakesError,
    isGetCommonIntakesLoading,
    isGetCommonIntakesSuccess,
    isGetCommonIntakesError,
  };
};

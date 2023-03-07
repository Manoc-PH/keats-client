import { useMutation } from "react-query";

// Services
import { GetIntakes } from "@app/services/api/Tracker";

export default () => {
  const {
    mutate: getIntakes,
    data: getIntakesData,
    error: getIntakesError,
    isLoading: isGetIntakesLoading,
    isSuccess: isGetIntakesSuccess,
    isError: isGetIntakesError,
  } = useMutation(GetIntakes);

  return {
    getIntakes,
    getIntakesData,
    getIntakesError,
    isGetIntakesLoading,
    isGetIntakesSuccess,
    isGetIntakesError,
  };
};

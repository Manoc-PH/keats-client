import { useMutation } from "react-query";

// Services
import { GetAccountVitals } from "@app/services/api/Account";

export default () => {
  const {
    mutate: getAccountVitals,
    data: getAccountVitalsData,
    error: getAccountVitalsError,
    isLoading: isGetAccountVitalsLoading,
    isSuccess: isGetAccountVitalsSuccess,
    isError: isGetAccountVitalsError,
  } = useMutation(GetAccountVitals);

  return {
    getAccountVitals,
    getAccountVitalsData,
    getAccountVitalsError,
    isGetAccountVitalsLoading,
    isGetAccountVitalsSuccess,
    isGetAccountVitalsError,
  };
};

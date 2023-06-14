import { useMutation } from "react-query";

// Services
import { GetConsumerVitals } from "@app/services/api/Consumer/Account";

export default () => {
  const {
    mutate: getConsumerVitals,
    data: getConsumerVitalsData,
    error: getConsumerVitalsError,
    isLoading: isGetConsumerVitalsLoading,
    isSuccess: isGetConsumerVitalsSuccess,
    isError: isGetConsumerVitalsError,
  } = useMutation(GetConsumerVitals);

  return {
    getConsumerVitals,
    getConsumerVitalsData,
    getConsumerVitalsError,
    isGetConsumerVitalsLoading,
    isGetConsumerVitalsSuccess,
    isGetConsumerVitalsError,
  };
};

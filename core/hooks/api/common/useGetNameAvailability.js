import { useMutation } from "react-query";

// Services
import { GetNameAvailability } from "@app/services/api/Consumer/Common";

export default () => {
  const {
    mutate: getNameAvailability,
    data: getNameAvailabilityData,
    error: getNameAvailabilityError,
    isLoading: isGetNameAvailabilityLoading,
    isSuccess: isGetNameAvailabilitySuccess,
    isError: isGetNameAvailabilityError,
  } = useMutation(GetNameAvailability);

  return {
    getNameAvailability,
    getNameAvailabilityData,
    getNameAvailabilityError,
    isGetNameAvailabilityLoading,
    isGetNameAvailabilitySuccess,
    isGetNameAvailabilityError,
  };
};

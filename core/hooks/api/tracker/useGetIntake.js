import { useMutation } from "react-query";

// Services
import { GetIntake } from "@app/services/api/Tracker";

export default () => {
  const {
    mutate: getIntake,
    data: getIntakeData,
    error: getIntakeError,
    isLoading: isGetIntakeLoading,
    isSuccess: isGetIntakeSuccess,
    isError: isGetIntakeError,
  } = useMutation(GetIntake);

  return {
    getIntake,
    getIntakeData,
    getIntakeError,
    isGetIntakeLoading,
    isGetIntakeSuccess,
    isGetIntakeError,
  };
};

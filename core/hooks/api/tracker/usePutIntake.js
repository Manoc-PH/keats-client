import { useMutation } from "react-query";

// Services
import { PutIntake } from "@app/services/api/Tracker";

export default () => {
  const {
    mutate: putIntake,
    data: putIntakeData,
    error: putIntakeError,
    isLoading: isPutIntakeLoading,
    isSuccess: isPutIntakeSuccess,
    isError: isPutIntakeError,
  } = useMutation(PutIntake);

  return {
    putIntake,
    putIntakeData,
    putIntakeError,
    isPutIntakeLoading,
    isPutIntakeSuccess,
    isPutIntakeError,
  };
};

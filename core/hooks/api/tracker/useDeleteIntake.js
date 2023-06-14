import { useMutation } from "react-query";

// Services
import { DeleteIntake } from "@app/services/api/Consumer/Tracker";

export default () => {
  const {
    mutate: deleteIntake,
    data: deleteIntakeData,
    error: deleteIntakeError,
    isLoading: isDeleteIntakeLoading,
    isSuccess: isDeleteIntakeSuccess,
    isError: isDeleteIntakeError,
  } = useMutation(DeleteIntake);

  return {
    deleteIntake,
    deleteIntakeData,
    deleteIntakeError,
    isDeleteIntakeLoading,
    isDeleteIntakeSuccess,
    isDeleteIntakeError,
  };
};

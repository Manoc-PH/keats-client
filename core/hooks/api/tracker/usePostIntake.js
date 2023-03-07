import { useMutation } from "react-query";

// Services
import { PostIntake } from "@app/services/api/Tracker";

export default () => {
  const {
    mutate: postIntake,
    data: postIntakeData,
    error: postIntakeError,
    isLoading: isPostIntakeLoading,
    isSuccess: isPostIntakeSuccess,
    isError: isPostIntakeError,
  } = useMutation(PostIntake);

  return {
    postIntake,
    postIntakeData,
    postIntakeError,
    isPostIntakeLoading,
    isPostIntakeSuccess,
    isPostIntakeError,
  };
};

import { useMutation } from "react-query";

// Services
import { ClearCredentials } from "@app/services/db";

export default () => {
  const {
    mutate: clearCredentials,
    data: clearCredentialsData,
    error: clearCredentialsError,
    isLoading: isClearCredentialsLoading,
    isSuccess: isClearCredentialsSuccess,
    isError: isClearCredentialsError,
  } = useMutation(ClearCredentials);

  return {
    clearCredentials,
    clearCredentialsData,
    clearCredentialsError,
    isClearCredentialsLoading,
    isClearCredentialsSuccess,
    isClearCredentialsError,
  };
};

import { useMutation } from "react-query";

// Services
import { ReadCredentials } from "@app/services/db";

export default () => {
  const {
    mutate: readCredentials,
    data: readCredentialsData,
    error: readCredentialsError,
    isLoading: isReadCredentialsLoading,
    isSuccess: isReadCredentialsSuccess,
    isError: isReadCredentialsError,
  } = useMutation(ReadCredentials);

  return {
    readCredentials,
    readCredentialsData,
    readCredentialsError,
    isReadCredentialsLoading,
    isReadCredentialsSuccess,
    isReadCredentialsError,
  };
};

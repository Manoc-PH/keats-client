import { useMutation } from "react-query";

// Services
import { CreateCredentials } from "@app/services/db";

export default () => {
  const {
    mutate: createCredentials,
    data: createCredentialsData,
    error: createCredentialsError,
    isLoading: isCreateCredentialsLoading,
    isSuccess: isCreateCredentialsSuccess,
    isError: isCreateCredentialsError,
  } = useMutation(CreateCredentials);

  return {
    createCredentials,
    createCredentialsData,
    createCredentialsError,
    isCreateCredentialsLoading,
    isCreateCredentialsSuccess,
    isCreateCredentialsError,
  };
};

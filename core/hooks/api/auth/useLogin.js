import { useMutation } from "react-query";

// Services
import { Login } from "@app/services/api/Auth";

export default () => {
  const {
    mutate: loginUser,
    data: loginUserData,
    error: loginUserError,
    isLoading: isLoginUserLoading,
    isSuccess: isLoginUserSuccess,
    isError: isLoginUserError,
  } = useMutation(Login);

  return {
    loginUser,
    loginUserData,
    loginUserError,
    isLoginUserLoading,
    isLoginUserSuccess,
    isLoginUserError,
  };
};

import { useMutation } from "react-query";

// Services
import { Login } from "@app/services/Auth";

export default () => {
  const {
    mutate: loginUser,
    data: loginUserData,
    error: loginUserError,
    isLoading: isLoginUserLoading,
    isSuccess: isLoginUserSuccess,
    isError: isLoginUserError,
  } = useMutation(Login);

  // credentials and isloggedin are set in the loginform component

  return {
    loginUser,
    loginUserData,
    loginUserError,
    isLoginUserLoading,
    isLoginUserSuccess,
    isLoginUserError,
  };
};

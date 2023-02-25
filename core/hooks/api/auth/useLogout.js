import { useMutation } from "react-query";

// Services
import { Logout } from "@app/services/Auth";

export default () => {
  const {
    mutate: logoutUser,
    data: logoutUserData,
    error: logoutUserError,
    isLoading: isLogoutUserLoading,
    isSuccess: isLogoutUserSuccess,
    isError: isLogoutUserError,
  } = useMutation(Logout);

  return {
    logoutUser,
    logoutUserData,
    logoutUserError,
    isLogoutUserLoading,
    isLogoutUserSuccess,
    isLogoutUserError,
  };
};

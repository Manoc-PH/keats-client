import { useMutation } from "react-query";

// Services
import { Signup } from "@app/services/Auth";

export default () => {
  const {
    mutate: signup,
    data: signupData,
    error: signupError,
    isLoading: isSignupLoading,
    isSuccess: isSignupSuccess,
    isError: isSignupError,
  } = useMutation(Signup);

  return {
    signup,
    signupData,
    signupError,
    isSignupLoading,
    isSignupSuccess,
    isSignupError,
  };
};

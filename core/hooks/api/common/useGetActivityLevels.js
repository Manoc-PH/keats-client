import { useMutation } from "react-query";

// Services
import { GetActivityLevels } from "@app/services/api/Consumer/Common";

export default () => {
  const {
    mutate: getActivityLevels,
    data: getActivityLevelsData,
    error: getActivityLevelsError,
    isLoading: isGetActivityLevelsLoading,
    isSuccess: isGetActivityLevelsSuccess,
    isError: isGetActivityLevelsError,
  } = useMutation(GetActivityLevels);

  return {
    getActivityLevels,
    getActivityLevelsData,
    getActivityLevelsError,
    isGetActivityLevelsLoading,
    isGetActivityLevelsSuccess,
    isGetActivityLevelsError,
  };
};

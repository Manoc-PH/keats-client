import { useMutation } from "react-query";

// Services
import { GetRecipeDiscovery } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: getRecipeDiscovery,
    data: getRecipeDiscoveryData,
    error: getRecipeDiscoveryError,
    isLoading: isGetRecipeDiscoveryLoading,
    isSuccess: isGetRecipeDiscoverySuccess,
    isError: isGetRecipeDiscoveryError,
  } = useMutation(GetRecipeDiscovery);

  return {
    getRecipeDiscovery,
    getRecipeDiscoveryData,
    getRecipeDiscoveryError,
    isGetRecipeDiscoveryLoading,
    isGetRecipeDiscoverySuccess,
    isGetRecipeDiscoveryError,
  };
};

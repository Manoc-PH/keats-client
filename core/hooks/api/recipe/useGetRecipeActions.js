import { useMutation } from "react-query";

// Services
import { GetRecipeActions } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: getRecipeActions,
    data: getRecipeActionsData,
    error: getRecipeActionsError,
    isLoading: isGetRecipeActionsLoading,
    isSuccess: isGetRecipeActionsSuccess,
    isError: isGetRecipeActionsError,
  } = useMutation(GetRecipeActions);

  return {
    getRecipeActions,
    getRecipeActionsData,
    getRecipeActionsError,
    isGetRecipeActionsLoading,
    isGetRecipeActionsSuccess,
    isGetRecipeActionsError,
  };
};

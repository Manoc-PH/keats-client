import { useMutation } from "react-query";

// Services
import { GetRecipeInstructions } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: getRecipeInstructions,
    data: getRecipeInstructionsData,
    error: getRecipeInstructionsError,
    isLoading: isGetRecipeInstructionsLoading,
    isSuccess: isGetRecipeInstructionsSuccess,
    isError: isGetRecipeInstructionsError,
  } = useMutation(GetRecipeInstructions);

  return {
    getRecipeInstructions,
    getRecipeInstructionsData,
    getRecipeInstructionsError,
    isGetRecipeInstructionsLoading,
    isGetRecipeInstructionsSuccess,
    isGetRecipeInstructionsError,
  };
};

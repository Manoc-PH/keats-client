import { useMutation } from "react-query";

// Services
import { DeleteRecipeLike } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: deleteRecipeLike,
    data: deleteRecipeLikeData,
    error: deleteRecipeLikeError,
    isLoading: isDeleteRecipeLikeLoading,
    isSuccess: isDeleteRecipeLikeSuccess,
    isError: isDeleteRecipeLikeError,
  } = useMutation(DeleteRecipeLike);

  return {
    deleteRecipeLike,
    deleteRecipeLikeData,
    deleteRecipeLikeError,
    isDeleteRecipeLikeLoading,
    isDeleteRecipeLikeSuccess,
    isDeleteRecipeLikeError,
  };
};

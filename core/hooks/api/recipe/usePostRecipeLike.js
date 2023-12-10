import { useMutation } from "react-query";

// Services
import { PostRecipeLike } from "@app/services/api/Consumer/Recipe";

export default () => {
  const {
    mutate: postRecipeLike,
    data: postRecipeLikeData,
    error: postRecipeLikeError,
    isLoading: isPostRecipeLikeLoading,
    isSuccess: isPostRecipeLikeSuccess,
    isError: isPostRecipeLikeError,
  } = useMutation(PostRecipeLike);

  return {
    postRecipeLike,
    postRecipeLikeData,
    postRecipeLikeError,
    isPostRecipeLikeLoading,
    isPostRecipeLikeSuccess,
    isPostRecipeLikeError,
  };
};

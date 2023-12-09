// import { publicAxios } from 'common/utils/axios'
import { authAxios } from "@app/common/utils/axios";
import * as FileSystem from "expo-file-system";
import axios from "axios";

// Endpoint
import { RECIPE_ENDPOINTS } from "@app/common/constants/APIUrls";
import { RECIPE_FILTERS_OPTIONS } from "@app/common/constants/options";

// POST ENDPOINTS
export const PostRecipe = async ({
  recipe,
  recipe_ingredients,
  recipe_instructions,
  timestamp,
}) => {
  const response = await authAxios.post(RECIPE_ENDPOINTS.POST_RECIPE, {
    recipe,
    recipe_ingredients,
    recipe_instructions,
    timestamp,
  });
  return response?.data;
};
export const PostRecipeImage = async ({ recipe_id, name_url_local }) => {
  const response = await authAxios.post(RECIPE_ENDPOINTS.POST_RECIPE_IMAGE, {
    recipe_id: recipe_id,
    name_url_local: name_url_local,
  });
  return response?.data;
};
export const PatchRecipeMainImage = async ({
  recipe_id,
  thumbnail_name,
  thumbnail_url,
  thumbnail_url_local,
  image_name,
  image_url,
  image_url_local,
}) => {
  const response = await authAxios.patch(
    RECIPE_ENDPOINTS.PATCH_RECIPE_MAIN_IMAGE,
    {
      recipe_id,
      thumbnail_name,
      thumbnail_url,
      thumbnail_url_local,
      image_name,
      image_url,
      image_url_local,
    }
  );
  return response?.data;
};
export const PostRecipeReview = async ({
  description,
  rating,
  owner_id,
  recipe_id,
  date_created,
}) => {
  const response = await authAxios.post(RECIPE_ENDPOINTS.POST_RECIPE_REVIEW, {
    description,
    rating,
    owner_id,
    recipe_id,
    date_created,
  });
  return response?.data;
};
export const PostRecipeLike = async ({ recipe_id }) => {
  const response = await authAxios.post(RECIPE_ENDPOINTS.POST_RECIPE_LIKE, {
    recipe_id,
  });
  return response?.data;
};

export const PostRecipeImagesCld = async (data) => {
  try {
    const base64String = await FileSystem.readAsStringAsync(
      data?.name_url_local,
      {
        encoding: FileSystem.EncodingType.Base64,
      }
    );

    // Convert the base64 string to a blob
    const imageBlob = `data:image/jpeg;base64,${base64String}`;

    let newPubId;
    if (data?.name_file.split(".jpg")?.length > 0) {
      newPubId = data?.name_file.split(".jpg")[0];
    } else {
      newPubId = data?.name_file;
    }
    const res = await axios.post(data?.upload_url, {
      file: imageBlob,
      api_key: data?.api_key,
      timestamp: data?.timestamp,
      signature: data?.signature,
      public_id: newPubId,
    });
    return res;
  } catch (error) {
    console.error(error.response);
  }
};
// GET ENDPOINTS
export const GetRecipe = async ({ recipe_id }) => {
  const response = await authAxios.get(RECIPE_ENDPOINTS.GET_RECIPE, {
    params: { recipe_id },
  });
  return response?.data;
};
export const GetRecipeIngredients = async ({ recipe_id }) => {
  const response = await authAxios.get(
    RECIPE_ENDPOINTS.GET_RECIPE_INGREDIENTS,
    { params: { recipe_id } }
  );
  return response?.data;
};
export const GetRecipeInstructions = async ({ recipe_id }) => {
  const response = await authAxios.get(
    RECIPE_ENDPOINTS.GET_RECIPE_INSTRUCTIONS,
    { params: { recipe_id } }
  );
  return response?.data;
};
export const GetRecipeReviews = async ({ recipe_id, page, size }) => {
  const response = await authAxios.get(RECIPE_ENDPOINTS.GET_RECIPE_REVIEWS, {
    params: { recipe_id, page: page || 0, size: size || 10 },
  });
  return response?.data;
};
export const GetRecipeReview = async ({ recipe_id }) => {
  const response = await authAxios.get(RECIPE_ENDPOINTS.GET_RECIPE_REVIEW, {
    params: { recipe_id },
  });
  return response?.data;
};
export const GetRecipeActions = async ({ recipe_id }) => {
  const response = await authAxios.get(RECIPE_ENDPOINTS.GET_RECIPE_ACTIONS, {
    params: { recipe_id },
  });
  return response?.data;
};
export const GetRecipeSearch = async ({ search_term }) => {
  const response = await authAxios.get(RECIPE_ENDPOINTS.GET_RECIPE_SEARCH, {
    params: { search_term },
  });
  return response?.data;
};
export const GetRecipeDiscovery = async () => {
  const response = await authAxios.get(RECIPE_ENDPOINTS.GET_RECIPE_DISCOVERY);
  return response?.data;
};
export const GetRecipeFiltered = async ({ filter, created, liked }) => {
  const response = await authAxios.get(RECIPE_ENDPOINTS.GET_RECIPE_FILTERED, {
    params: {
      filter: filter || RECIPE_FILTERS_OPTIONS[0].value,
      created,
      liked,
    },
  });
  return response?.data;
};
// PATCH ENDPOINTS
export const PatchRecipe = async ({
  recipe,
  recipe_ingredients,
  recipe_instructions,
}) => {
  const response = await authAxios.patch(RECIPE_ENDPOINTS.PATCH_RECIPE, {
    recipe,
    recipe_ingredients,
    recipe_instructions,
  });
  return response?.data;
};
export const PatchRecipeReview = async ({
  id,
  description,
  rating,
  owner_id,
  recipe_id,
}) => {
  const response = await authAxios.patch(RECIPE_ENDPOINTS.PATCH_RECIPE_REVIEW, {
    id,
    description,
    rating,
    owner_id,
    recipe_id,
  });
  return response?.data;
};
// DELETE ENDPOINTS
export const DeleteRecipe = async ({ id }) => {
  const response = await authAxios.get(RECIPE_ENDPOINTS.DELETE_RECIPE, {
    id,
  });
  return response?.data;
};
export const DeleteRecipeLike = async ({ recipe_id }) => {
  const response = await authAxios.get(RECIPE_ENDPOINTS.DELETE_RECIPE_LIKE, {
    recipe_id,
  });
  return response?.data;
};
export const DeleteRecipeReview = async ({ recipe_id }) => {
  const response = await authAxios.get(RECIPE_ENDPOINTS.DELETE_RECIPE_REVIEW, {
    recipe_id,
  });
  return response?.data;
};

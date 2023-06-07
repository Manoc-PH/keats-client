// import { publicAxios } from 'common/utils/axios'
import { authAxios } from "@app/common/utils/axios";

// Endpoint
import { INGREDIENT_ENDPOINTS } from "@app/common/constants/APIUrls";

export const GetSearchIngredient = async (search_term) => {
  const response = await authAxios.get(
    INGREDIENT_ENDPOINTS.GET_SEARCH_INGREDIENT,
    {
      params: { search_term },
    }
  );
  return response?.data;
};

export const GetIngredientDetails = async (ingredient_id) => {
  const response = await authAxios.get(
    INGREDIENT_ENDPOINTS.GET_INGREDIENT_DETAILS,
    {
      params: { ingredient_id },
    }
  );
  return response?.data;
};

export const GetIngredientMappingDetails = async (ingredient_mapping_id) => {
  const response = await authAxios.get(
    INGREDIENT_ENDPOINTS.GET_INGREDIENT_MAPPING_DETAILS,
    {
      params: { ingredient_mapping_id },
    }
  );
  return response?.data;
};

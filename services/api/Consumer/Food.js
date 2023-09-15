// import { publicAxios } from 'common/utils/axios'
import { authAxios } from "@app/common/utils/axios";

// Endpoint
import { FOOD_ENDPOINTS } from "@app/common/constants/APIUrls";

export const GetSearchFood = async (search_term) => {
  const response = await authAxios.get(FOOD_ENDPOINTS.GET_SEARCH_FOOD, {
    params: { search_term },
  });
  return response?.data;
};

export const GetFoodDetails = async ({ food_id, barcode }) => {
  const response = await authAxios.get(FOOD_ENDPOINTS.GET_FOOD_DETAILS, {
    params: { food_id, barcode },
  });
  return response?.data;
};

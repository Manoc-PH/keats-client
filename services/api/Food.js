// import { publicAxios } from 'common/utils/axios'
import { authAxios } from "@app/common/utils/axios";

// Endpoint
import { FOOD_ENDPOINTS } from "@app/common/constants/APIUrls";

export const GetSearchFood = async () => {
  const response = await authAxios.get(FOOD_ENDPOINTS.GET_SEARCH_FOOD);
  return response?.data;
};

export const GetFoodDetails = async () => {
  const response = await authAxios.get(FOOD_ENDPOINTS.GET_FOOD_DETAILS);
  return response?.data;
};

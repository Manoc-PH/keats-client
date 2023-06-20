// import { publicAxios } from 'common/utils/axios'
import { authAxios } from "@app/common/utils/axios";

// Endpoint
import { COMMON_ENDPOINTS } from "@app/common/constants/APIUrls";

export const GetActivityLevels = async () => {
  const response = await authAxios.get(COMMON_ENDPOINTS.GET_ACTIVITY_LEVELS);
  return response?.data;
};
export const GetDietPlans = async () => {
  const response = await authAxios.get(COMMON_ENDPOINTS.GET_DIET_PLANS);
  return response?.data;
};

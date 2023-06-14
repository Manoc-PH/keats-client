// import { publicAxios } from 'common/utils/axios'
import { authAxios } from "@app/common/utils/axios";

// Endpoint
import { CONSUMER_ENDPOINTS } from "@app/common/constants/APIUrls";

export const GetConsumerVitals = async () => {
  const response = await authAxios.get(CONSUMER_ENDPOINTS.GET_CONSUMER_VITALS);
  return response?.data;
};
export const UpdateConsumerVitals = async () => {
  const response = await authAxios.put(
    CONSUMER_ENDPOINTS.UPDATE_CONSUMER_VITALS
  );
  return response?.data;
};

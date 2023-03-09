// import { publicAxios } from 'common/utils/axios'
import { authAxios } from "@app/common/utils/axios";

// Endpoint
import { ACCOUNT_ENDPOINTS } from "@app/common/constants/APIUrls";

export const GetAccountVitals = async () => {
  const response = await authAxios.get(ACCOUNT_ENDPOINTS.GET_ACCOUNT_VITALS);
  return response?.data;
};
export const UpdateAccountProfile = async () => {
  const response = await authAxios.put(
    ACCOUNT_ENDPOINTS.UPDATE_ACCOUNT_PROFILE
  );
  return response?.data;
};

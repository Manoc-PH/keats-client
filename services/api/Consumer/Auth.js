// import { publicAxios } from 'common/utils/axios'
import { authAxios } from "@app/common/utils/axios";

// Endpoint
import { AUTH_ENDPOINTS } from "@app/common/constants/APIUrls";

export const Login = async ({ username, password }) => {
  const response = await authAxios.post(AUTH_ENDPOINTS.POST_LOGIN, {
    username,
    password,
  });
  return response;
};
export const Logout = async () => {
  const response = await authAxios.post(AUTH_ENDPOINTS.POST_LOGOUT);
  return response?.data;
};
export const Signup = async ({
  username,
  password,
  name_first,
  name_last,
  weight,
  height,
  birthday,
  sex,
  activity_lvl_id,
  diet_plan_id,
  measure_unit_id,
}) => {
  const response = await authAxios.post(AUTH_ENDPOINTS.POST_SIGNUP, {
    username,
    password,
    name_first,
    name_last,
    weight,
    height,
    birthday,
    sex,
    activity_lvl_id,
    diet_plan_id,
    measure_unit_id,
  });
  return response;
};

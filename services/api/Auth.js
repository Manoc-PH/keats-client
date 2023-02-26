// import { publicAxios } from 'common/utils/axios'
import { authAxios } from "common/utils/axios";

// Endpoint
import { AUTH_ENDPOINTS, BASE_URL } from "common/constants/apiUrls";

export const Login = async ({ username, password }) => {
  const response = await authAxios.post(AUTH_ENDPOINTS.POST_LOGIN, {
    username,
    password,
  });
  return response;
};
export const Logout = async () => {
  const response = await authAxios.post(AUTH_ENDPOINTS.POST_LOGOUT);
  return response;
};
export const Signup = async ({
  username,
  password,
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

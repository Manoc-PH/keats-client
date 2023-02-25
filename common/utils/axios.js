import axios from "axios";

import { BASE_URL } from "@app/common/constants/APIUrls";

const accessToken = JSON.parse(
  localStorage.getItem("userCredentials")
)?.access_token;

export const authAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
// Logging out user if token expires
authAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.setItem("userCredentials", "{}");
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

// TODO: REVERT THIS BACK TO THE REAL SERVER
export const publicAxios = axios.create({
  baseURL: BASE_URL,
});

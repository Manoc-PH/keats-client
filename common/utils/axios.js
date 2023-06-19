import axios from "axios";

// TODO Set back to production url
import { BASE_URL, LOCAL_URL } from "@app/common/constants/APIUrls";
import { ClearCredentials } from "@app/services/db";

const authAxios = axios.create({
  baseURL: LOCAL_URL,
  withCredentials: true,
});

authAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error?.response) {
      const status = error.response.status;
      if (status === 401) {
        ClearCredentials();
      }
    }
    return Promise.reject(error);
  }
);
// TODO: REVERT THIS BACK TO THE REAL SERVER
const publicAxios = axios.create({
  baseURL: LOCAL_URL,
});

export { authAxios, publicAxios };

import axios from "axios";
import RNRestart from "react-native-restart";

import { BASE_URL, LOCAL_URL } from "@app/common/constants/APIUrls";
import { ClearCredentials } from "@app/services/db";

const authAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// TODO create an interceptor for request and check for cookie or bearer token before passing
authAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error?.response) {
      const status = error.response.status;
      if (status === 401) {
        ClearCredentials();
        // TODO USE A BETTER ALTERNATIVE FOR THIS
        RNRestart.restart();
      }
    }
    return Promise.reject(error);
  }
);
const publicAxios = axios.create({
  baseURL: BASE_URL,
});

export { authAxios, publicAxios };

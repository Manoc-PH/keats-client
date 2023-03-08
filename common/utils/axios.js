import axios from "axios";
import { useDispatch } from "react-redux";

// TODO Set back to production url
import { BASE_URL, LOCAL_URL } from "@app/common/constants/APIUrls";

// Services
import { ClearCredentials } from "@app/services/db";

// Store
import { actions, reducers } from "@app/core/store";

export const authAxios = axios.create({
  baseURL: LOCAL_URL,
  withCredentials: true,
});
// Logging out user if token expires
authAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Store Actions
    // TODO Add logout function when token expires
    // const { setIsLoggedIn: setIsLoggedInState } = actions;
    // const dispatch = useDispatch();
    // const setIsLoggedIn = (v) => dispatch(setIsLoggedInState(v));
    if (error.response.status === 401 || error.response.status === 403) {
      ClearCredentials()
        .then(() => {
          // setIsLoggedIn(false);
          return Promise.reject(error);
        })
        .catch((err) => console.log(err));
    }
    return Promise.reject(error);
  }
);

// TODO: REVERT THIS BACK TO THE REAL SERVER
export const publicAxios = axios.create({
  baseURL: LOCAL_URL,
});

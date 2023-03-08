import axios from "axios";

// TODO Set back to production url
import { BASE_URL, LOCAL_URL } from "@app/common/constants/APIUrls";

export const authAxios = axios.create({
  baseURL: LOCAL_URL,
  withCredentials: true,
});

// TODO: REVERT THIS BACK TO THE REAL SERVER
export const publicAxios = axios.create({
  baseURL: LOCAL_URL,
});

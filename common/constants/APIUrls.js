export const BASE_URL = "";
export const LOCAL_URL = "http://localhost:3001";
//! REVERT BACK TO NEW URL BEFORE DEPLOYING TO PROD
export const AUTH_ENDPOINTS = {
  POST_SIGNUP: "/api/auth/signup",
  POST_LOGIN: "/api/auth/login",
  POST_LOGOUT: "/api/auth/logout",
};

export const FOOD_ENDPOINTS = {
  GET_SEARCH_FOOD: "/api/food/search_food",
  GET_FOOD_DETAILS: "/api/food",
};

export const TRACKER_ENDPOINTS = {
  GET_DAILY_NUTRIENTS: "/api/tracker/daily_nutrients",
  GET_DAILY_NUTRIENTS_LIST: "/api/tracker/daily_nutrients_list",
  GET_INTAKES: "/api/tracker/intakes",
  GET_INTAKE: "/api/tracker/intake",
  POST_INTAKE: "/api/tracker/intake",
  PUT_INTAKE: "/api/tracker/intake",
  DELETE_INTAKE: "/api/tracker/intake",
};

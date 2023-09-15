export const BASE_URL = "https://api.keats.app";
export const LOCAL_URL = "http://10.0.2.2:8080";
//! REVERT BACK TO NEW URL BEFORE DEPLOYING TO PROD
export const AUTH_ENDPOINTS = {
  POST_SIGNUP: "/api/auth/signup",
  POST_LOGIN: "/api/auth/login",
  POST_LOGOUT: "/api/auth/logout",
};

export const INGREDIENT_ENDPOINTS = {
  GET_SEARCH_INGREDIENT: "/api/ingredient/search_ingredient",
  GET_INGREDIENT_DETAILS: "/api/ingredient",
  GET_INGREDIENT_MAPPING_DETAILS: "/api/ingredient/mapping",
};

export const TRACKER_ENDPOINTS = {
  GET_DAILY_NUTRIENTS: "/api/tracker/daily_nutrients",
  GET_DAILY_NUTRIENTS_LIST: "/api/tracker/daily_nutrients_list",
  GET_INTAKES: "/api/tracker/intakes",
  GET_COMMON_INTAKES: "/api/tracker/common_intakes",
  GET_INTAKE: "/api/tracker/intake",
  POST_INTAKE: "/api/tracker/intake",
  PUT_INTAKE: "/api/tracker/intake",
  DELETE_INTAKE: "/api/tracker/intake",
};

export const CONSUMER_ENDPOINTS = {
  GET_CONSUMER_VITALS: "/api/account/consumer_vitals",
  UPDATE_CONSUMER_VITALS: "/api/account/consumer_vitals",
};

export const COMMON_ENDPOINTS = {
  GET_ACTIVITY_LEVELS: "/api/common/activity_levels",
  GET_DIET_PLANS: "/api/common/diet_plans",
  GET_NAME_AVAILABILITY: "/api/common/name_availability",
};

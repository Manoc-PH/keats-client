// import { publicAxios } from 'common/utils/axios'
import { authAxios } from "common/utils/axios";

// Endpoint
import { TRACKER_ENDPOINTS, BASE_URL } from "common/constants/apiUrls";

export const GetDailyNutrients = async () => {
  const response = await authAxios.post(TRACKER_ENDPOINTS.GET_DAILY_NUTRIENTS);
  return response;
};

export const GetDailyNutrientsList = async () => {
  const response = await authAxios.post(
    TRACKER_ENDPOINTS.GET_DAILY_NUTRIENTS_LIST
  );
  return response;
};

export const GetIntakes = async () => {
  const response = await authAxios.post(TRACKER_ENDPOINTS.GET_INTAKES);
  return response;
};

export const GetIntake = async ({ intake_id }) => {
  const response = await authAxios.get(TRACKER_ENDPOINTS.GET_INTAKE, {
    params: { intake_id: intake_id },
  });
  return response;
};

export const PostIntake = async ({
  food_id,
  recipe_id,
  amount,
  amount_unit,
  amount_unit_desc,
  serving_size,
}) => {
  const response = await authAxios.get(TRACKER_ENDPOINTS.POST_INTAKE, {
    food_id: food_id,
    recipe_id: recipe_id,
    amount: amount,
    amount_unit: amount_unit,
    amount_unit_desc: amount_unit_desc,
    serving_size: serving_size,
  });
  return response;
};

export const PutIntake = async ({
  intake_id,
  food_id,
  recipe_id,
  amount,
  amount_unit,
  amount_unit_desc,
  serving_size,
}) => {
  const response = await authAxios.get(TRACKER_ENDPOINTS.PUT_INTAKE, {
    intake_id: intake_id,
    food_id: food_id,
    recipe_id: recipe_id,
    amount: amount,
    amount_unit: amount_unit,
    amount_unit_desc: amount_unit_desc,
    serving_size: serving_size,
  });
  return response;
};

export const DeleteIntake = async ({ intake_id }) => {
  const response = await authAxios.get(TRACKER_ENDPOINTS.DELETE_INTAKE, {
    intake_id: intake_id,
  });
  return response;
};

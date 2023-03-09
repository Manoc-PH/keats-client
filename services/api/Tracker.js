// import { publicAxios } from 'common/utils/axios'
import { authAxios } from "@app/common/utils/axios";

// Endpoint
import { TRACKER_ENDPOINTS } from "@app/common/constants/APIUrls";

export const GetDailyNutrients = async () => {
  const response = await authAxios.get(TRACKER_ENDPOINTS.GET_DAILY_NUTRIENTS);
  return response?.data;
};

export const GetDailyNutrientsList = async () => {
  const response = await authAxios.get(
    TRACKER_ENDPOINTS.GET_DAILY_NUTRIENTS_LIST
  );

  return response?.data;
};

export const GetIntakes = async () => {
  const response = await authAxios.get(TRACKER_ENDPOINTS.GET_INTAKES);
  return response?.data;
};

export const GetIntake = async ({ intake_id }) => {
  const response = await authAxios.get(TRACKER_ENDPOINTS.GET_INTAKE, {
    params: { intake_id: intake_id },
  });
  return response?.data;
};

export const PostIntake = async ({
  food_id,
  recipe_id,
  amount,
  amount_unit,
  amount_unit_desc,
  serving_size,
}) => {
  const response = await authAxios.post(TRACKER_ENDPOINTS.POST_INTAKE, {
    food_id: food_id,
    recipe_id: recipe_id,
    amount: amount,
    amount_unit: amount_unit,
    amount_unit_desc: amount_unit_desc,
    serving_size: serving_size,
  });
  return response?.data;
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
  const response = await authAxios.put(TRACKER_ENDPOINTS.PUT_INTAKE, {
    intake_id: intake_id,
    food_id: food_id,
    recipe_id: recipe_id,
    amount: amount,
    amount_unit: amount_unit,
    amount_unit_desc: amount_unit_desc,
    serving_size: serving_size,
  });
  return response?.data;
};

export const DeleteIntake = async ({ intake_id }) => {
  const response = await authAxios.delete(TRACKER_ENDPOINTS.DELETE_INTAKE, {
    intake_id: intake_id,
  });
  return response?.data;
};

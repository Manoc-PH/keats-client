import { combineReducers } from "redux";

import Search from "./Search";
import Auth from "./Auth";
import Tracker from "./Tracker";
import Account from "./Account";
import Ingredient from "./Ingredient";
import Food from "./Food";
import Ui from "./Ui";

const clearstore = () => ({
  type: "USER_LOGOUT",
});

const actionList = {
  ...Search.actions,
  ...Auth.actions,
  ...Tracker.actions,
  ...Account.actions,
  ...Ingredient.actions,
  ...Food.actions,
  ...Ui.actions,
  clearstore,
};

const appReducer = combineReducers({
  search: Search.reducer,
  auth: Auth.reducer,
  tracker: Tracker.reducer,
  account: Account.reducer,
  ingredient: Ingredient.reducer,
  food: Food.reducer,
  ui: Ui.reducer,
});

export const reducers = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export const actions = actionList;

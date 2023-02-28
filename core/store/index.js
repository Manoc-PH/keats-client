import { combineReducers } from "redux";

import Search from "./Search";
import Auth from "./Auth";

const actionList = {
  ...Search.actions,
  ...Auth.actions,
};

const reducerList = {
  search: Search.reducer,
  auth: Auth.reducer,
};

export const reducers = combineReducers(reducerList);

export const actions = actionList;

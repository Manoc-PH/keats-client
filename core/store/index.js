import { combineReducers } from "redux";

import Search from "./Search";

const actionList = {
  ...Search.actions,
};

const reducerList = {
  search: Search.reducer,
};

export const reducers = combineReducers(reducerList);

export const actions = actionList;

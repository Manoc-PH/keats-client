import { combineReducers } from "redux";

import Search from "./Search";
import Auth from "./Auth";
import Tracker from "./Tracker";
import Account from "./Account";

const actionList = {
  ...Search.actions,
  ...Auth.actions,
  ...Tracker.actions,
  ...Account.actions,
};

const reducerList = {
  search: Search.reducer,
  auth: Auth.reducer,
  tracker: Tracker.reducer,
  account: Account.reducer,
};

export const reducers = combineReducers(reducerList);

export const actions = actionList;

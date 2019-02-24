import { combineReducers } from "redux";
import * as Actions from "./actions";

const filter = (state = "", action) => {
  switch (action.type) {
    case Actions.UPDATE_FILTER_ACTION:
      return action.payload;
    default:
      return state;
  }
};

const center = (state = {}, action) => {
  switch (action.type) {
    case Actions.UPDATE_CENTER_ACTION:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

const accounts = (state = [], action) => {
  switch (action.type) {
    case Actions.ALL_ACCOUNTS_ACTION:
      let accounts = action.payload;
      return state.concat(accounts);
    default:
      return state;
  }
};

const account = (state = {}, action) => {
  switch (action.type) {
    case Actions.ACCOUNT_ACTION:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

const toast = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ account, accounts, center, filter, toast });

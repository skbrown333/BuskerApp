import { combineReducers } from "redux";
import { ACCOUNT_ACTION, ALL_ACCOUNTS_ACTION } from "./actions";
import { UPDATE_FILTER_ACTION } from "./actions";

const filter = (state = "", action) => {
  switch (action.type) {
    case UPDATE_FILTER_ACTION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const accounts = (state = [], action) => {
  switch (action.type) {
    case ALL_ACCOUNTS_ACTION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const account = (state = {}, action) => {
  switch (action.type) {
    case ACCOUNT_ACTION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const toast = (state = [], action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default combineReducers({ account, accounts, filter, toast });

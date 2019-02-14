import { combineReducers } from "redux";
import { ACCOUNT_ACTION } from "./actions";

const account = (state = {}, action) => {
  switch (action.type) {
    case ACCOUNT_ACTION: {
      let account = action.account;
      return {
        ...state,
        id: account.id,
        name: account.name,
        email: account.email,
        address: account.address,
        lat: account.lat,
        lng: account.lng,
        account_type: account.account_type,
        is_active: account.is_active
      };
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

export default combineReducers({ account, toast });

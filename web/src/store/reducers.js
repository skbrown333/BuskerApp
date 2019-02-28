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

const events = (state = [], action) => {
  let events;
  switch (action.type) {
    case Actions.ALL_EVENTS_ACTION:
      events = action.payload;
      return state.concat(events);
    case Actions.ADD_EVENT_ACTION:
      events = [action.payload];
      return [action.payload].concat(state);
    default:
      return state;
  }
};

const accounts = (state = {}, action) => {
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

export default combineReducers({
  account,
  accounts,
  events,
  center,
  filter,
  toast
});

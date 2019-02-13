import { combineReducers } from "redux";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  return state;
};

export default combineReducers({ reducer });

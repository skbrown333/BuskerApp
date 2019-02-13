import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./initialState";

function configureStore() {
  return createStore(rootReducer, initialState);
}

export default configureStore;

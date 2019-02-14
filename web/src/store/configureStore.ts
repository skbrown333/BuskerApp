import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./initialState";

function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export default configureStore;

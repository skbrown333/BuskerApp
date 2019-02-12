import * as React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { AccountAction, updateAccount } from "../../modules/Actions";

import { Header } from "../Header";
import { Map } from "../Map";
import { Login } from "../Login";

type initialStateType = {
  account: any;
};

const initialState: initialStateType = {
  account: {}
};

function app(state = initialState, action: any) {
  switch (action.type) {
    case AccountAction:
      return Object.assign({}, state, { account: action.account });
    default:
      return state;
  }
}

const store = createStore(app);
console.log(store.getState());
store.dispatch(updateAccount({ name: "steffan" }));
console.log(store.getState());

export class Main extends React.Component<any, {}> {
  render() {
    return (
      <div>
        <Router>
          <div className="main">
            <Route path="/" component={Header} />
            <Route exact path="/" component={Map} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

import * as React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { Header } from "../Header";
import { Map } from "../Map";
import { Login } from "../Login";

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

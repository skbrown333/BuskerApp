import * as React from "react";
import { Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Map } from "./Components/Map";
import { Login } from "./Components/Login";

export default class App extends React.Component<any, {}> {
  render() {
    return (
      <div className="app">
        <Route path="/" component={Header} />
        <Route exact path="/" component={Map} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

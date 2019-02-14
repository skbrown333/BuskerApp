import * as React from "react";
import { withCookies } from "react-cookie";
import { Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Map } from "./Components/Map";
import LoginContainer from "./Components/Login";
import AccountService from "./Services/Account/account.service";
import { COOKIES } from "./Constants/constants";

class App extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);

    this.getAccount = this.getAccount.bind(this);
  }

  componentDidMount() {
    this.getAccount();
  }

  async getAccount() {
    let cookies = this.props.cookies;
    let token = cookies.get(COOKIES.token);
    try {
      let data = await AccountService.authenticateByToken(token);
      if (!data.token) return;

      cookies.set(COOKIES.token, data.token, { secure: true });
    } catch {
      console.log("Error getting account");
    }
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/"
          render={() => <Header cookies={this.props.cookies} />}
        />
        <Route
          exact
          path="/"
          render={() => <Map cookies={this.props.cookies} />}
        />
        <Route
          path="/login"
          render={() => <LoginContainer cookies={this.props.cookies} />}
        />
      </div>
    );
  }
}

export default withCookies(App);

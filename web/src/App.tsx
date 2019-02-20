import * as React from "react";
import { Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Map } from "./Components/Map";
import LoginContainer from "./Components/Login";
import AccountService from "./Services/Account/account.service";
import { COOKIES } from "./Constants/constants";
import { withCookies } from "react-cookie";
import { connect } from "react-redux";
import { updateAccount } from "./store/actions";
import ProfileContainer from "./Components/Profile";
import { Sidebar } from "./Components/Sidebar";

export class App extends React.Component<any> {
  readonly state: any;
  constructor(props: any) {
    super(props);

    this.state = {
      loading: true
    };

    this.getAccount = this.getAccount.bind(this);
    this.getContent = this.getContent.bind(this);
  }

  componentDidMount() {
    this.getAccount();
  }

  async getAccount() {
    let cookies = this.props.cookies;
    let token = cookies.get(COOKIES.token);
    if (!token) {
      this.setState({ loading: false });
      return;
    }
    try {
      let data = await AccountService.authenticateByToken(token);
      if (!data.token) {
        this.setState({ loading: false });
        return;
      }
      cookies.set(COOKIES.token, data.token, { secure: true });
      this.props.updateAccount(data.account);
      this.setState({ loading: false });
    } catch {
      console.log("Error getting account");
    }
  }

  getContent() {
    if (!this.state.loading) {
      return (
        <div className="app">
          <Route
            path="/"
            render={() => <Header cookies={this.props.cookies} />}
          />
          <Route
            exact
            path="/"
            component={Sidebar}
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
          <Route exact path="/profile" component={ProfileContainer} />
        </div>
      );
    }
    return null;
  }

  render() {
    return this.getContent();
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    account: state.account,
    cookies: ownProps.cookies
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  updateAccount: (account: any) => dispatch(updateAccount(account))
});

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default withCookies(AppContainer);

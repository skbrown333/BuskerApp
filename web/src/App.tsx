import * as React from "react";
import { Route } from "react-router-dom";

import { Header } from "./Components/Header";
import MapContainer from "./Components/Map";
import LoginContainer from "./Components/Login";
import EventService from "./Services/Event/event.service";
import AccountService from "./Services/Account/account.service";
import { COOKIES } from "./Constants/constants";
import { withCookies } from "react-cookie";
import { connect } from "react-redux";
import { updateAccount, updateAccounts, updateEvents } from "./store/actions";
import ProfileContainer from "./Components/Profile";
import SidebarContainer from "./Components/Sidebar";

export class App extends React.Component<any> {
  readonly state: any;
  constructor(props: any) {
    super(props);

    this.state = {
      loadingAccount: true,
      loadingAccounts: true,
      loadingEvents: true
    };

    this.getAccount = this.getAccount.bind(this);
    this.getAccounts = this.getAccounts.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.getContent = this.getContent.bind(this);
  }

  componentDidMount() {
    this.getAccount();
    this.getAccounts();
    this.getEvents();
  }

  async getEvents() {
    try {
      let events = await EventService.getAll();
      this.props.updateEvents(events);
      this.setState({ loadingEvents: false });
    } catch (err) {
      this.setState({ loadingEvents: false });
    }
  }

  async getAccounts() {
    try {
      let accounts = await AccountService.getAll();
      this.props.updateAccounts(accounts);
      this.setState({ loadingAccounts: false });
    } catch (err) {
      this.setState({ loadingAccounts: false });
    }
  }

  async getAccount() {
    let cookies = this.props.cookies;
    let token = cookies.get(COOKIES.token);
    if (!token) {
      this.setState({ loadingAccount: false });
      return;
    }
    try {
      let data = await AccountService.authenticateByToken(token);
      if (!data.token) {
        this.setState({ loadingAccount: false });
        return;
      }
      cookies.set(COOKIES.token, data.token, { secure: true });
      this.props.updateAccount(data.account);
      this.setState({ loadingAccount: false });
    } catch {
      this.setState({ loadingAccount: false });
    }
  }

  getContent() {
    if (
      !this.state.loadingAccount &&
      !this.state.loadingEvents &&
      !this.state.loadingAccounts
    ) {
      return (
        <div className="app">
          <Route
            path="/"
            render={() => <Header cookies={this.props.cookies} />}
          />
          <Route exact path="/" component={SidebarContainer} />
          <Route
            exact
            path="/"
            render={() => <MapContainer cookies={this.props.cookies} />}
          />
          <Route
            exact
            path="/login"
            render={() => <LoginContainer cookies={this.props.cookies} />}
          />
          <Route
            exact
            path="/profile"
            render={() => <ProfileContainer cookies={this.props.cookies} />}
          />
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
  updateAccount: (account: any) => dispatch(updateAccount(account)),
  updateAccounts: (accounts: any) => dispatch(updateAccounts(accounts)),
  updateEvents: (events: any) => dispatch(updateEvents(events))
});

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default withCookies(AppContainer);

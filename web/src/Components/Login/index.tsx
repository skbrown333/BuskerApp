import * as React from "react";
import { connect } from "react-redux";
import { Input } from "../Inputs/Input";
import { InputEmail } from "../Inputs/InputEmail";
import Button from "@material-ui/core/Button";
import { InputPassword } from "../Inputs/InputPassword";
import AccountService from "../../Services/Account/account.service";
import { COOKIES } from "../../Constants/constants";
import { updateAccount } from "../../modules/Actions";

interface State {
  readonly email: string;
  readonly password: string;
}
export class Login extends React.Component<any, State> {
  readonly state: State;

  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsername(email: string) {
    this.setState({ email: email });
  }

  handlePassword(password: string) {
    this.setState({ password: password });
  }

  async handleLogin(event: any) {
    event.preventDefault();
    if (this.state.email === "" || this.state.password === "") return;
    let options = {
      email: this.state.email,
      password: this.state.password
    };
    try {
      let data = await AccountService.authenticate(options);
      if (!data.token) return;

      this.props.cookies.set(COOKIES.token, data.token, { secure: true });
      this.props.updateAccount(data.account);
      window.location.replace("/");
    } catch {
      console.log("Error Logging in");
    }
  }

  render() {
    return (
      <form className="login" onSubmit={this.handleLogin}>
        <input type="submit" style={{ display: "none" }} />
        <InputEmail onChange={this.handleUsername} placeHolder="email" />
        <InputPassword onChange={this.handlePassword} placeHolder="password" />
        <Button type="submit" className="login-button--filled">
          Login
        </Button>
        <Button className="login-button" onClick={() => {}}>
          Sign Up
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  console.log(state);
  return {
    state: state,
    cookies: ownProps.cookies
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  updateAccount: (account: any) => dispatch(updateAccount(account))
});

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
export default LoginContainer;

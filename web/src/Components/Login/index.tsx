import * as React from "react";

interface State {
  readonly email: string;
  readonly password: string;
  readonly name: string;
}
export class Login extends React.Component<any, State> {
  readonly state: State;

  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  render() {
    return (
      <div className="login">
        <div />
        <div />
      </div>
    );
  }
}

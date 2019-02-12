import * as React from "react";
import CheckIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

interface State {
  readonly value: string;
  readonly class: string;
}
interface InputEmailProps {
  onChange: any;
  placeHolder: string;
}
export class InputEmail extends React.Component<InputEmailProps, State> {
  readonly state: State;

  constructor(props: InputEmailProps) {
    super(props);

    this.state = {
      value: "",
      class: "empty"
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  validateEmail(email: string) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }

  handleChange(event: any) {
    let email = event.target.value;
    let isEmail = this.validateEmail(email);
    this.setState({ value: email });

    if (email === "") {
      this.props.onChange("");
      return;
    } else if (!isEmail) {
      this.props.onChange("");
      return;
    }

    this.setState({ class: "input-valid" });
    this.props.onChange(email);
  }

  onBlur() {
    let email = this.state.value;
    let isEmail = this.validateEmail(email);

    if (email === "" || !email) {
      this.setState({ class: "empty" });
      return;
    } else if (!isEmail) {
      this.setState({ class: "input-invalid" });
      return;
    }

    this.setState({ class: "input-valid" });
  }

  render() {
    return (
      <div className="input-email">
        <input
          type="text"
          className={"input " + this.state.class}
          onChange={this.handleChange}
          onBlur={this.onBlur}
          placeholder={this.props.placeHolder}
        />
        <CheckIcon className={"input-email__valid " + this.state.class} />
        <CloseIcon className={"input-email__invalid " + this.state.class} />
      </div>
    );
  }
}

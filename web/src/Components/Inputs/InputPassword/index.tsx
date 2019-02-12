import * as React from "react";

interface State {
  readonly value: string;
  readonly class: string;
}
interface InputProps {
  onChange: any;
  placeHolder: string;
}
export class InputPassword extends React.Component<InputProps, State> {
  readonly state: State;

  constructor(props: InputProps) {
    super(props);

    this.state = {
      value: "",
      class: "empty"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    let password = event.target.value;
    let styleClass = !password || password === "" ? "empty" : "";

    this.setState({ class: styleClass });
    this.props.onChange(password);
  }

  render() {
    return (
      <input
        type="password"
        className={"input " + this.state.class}
        onChange={this.handleChange}
        placeholder={this.props.placeHolder}
      />
    );
  }
}

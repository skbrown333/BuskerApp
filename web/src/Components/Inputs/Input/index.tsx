import * as React from "react";

interface State {
  readonly value: string;
  readonly class: string;
}
interface InputProps {
  onChange: any;
  placeHolder: string;
  type: string;
  className?: string;
}
export class Input extends React.Component<InputProps, State> {
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
    let value = event.target.value;
    let classStyle = !value || value === "" ? "empty" : "";

    this.setState({ class: classStyle });
    this.props.onChange(value);
  }

  render() {
    return (
      <input
        type={this.props.type}
        className={this.props.className + " input " + this.state.class}
        onChange={this.handleChange}
        placeholder={this.props.placeHolder}
      />
    );
  }
}

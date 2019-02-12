import * as React from "react";

interface State {
  readonly value: string;
}
interface InputProps {
    onChange: any,
    placeHolder: string,
}
export class InputPassword extends React.Component<InputProps, State> {
  readonly state: State;

  constructor(props: InputProps) {
    super(props);

    this.state = {
      value: "",
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    let password = event.target.value;
    this.props.onChange(password)
  }

  render() {
    return (
        <input 
            type="password" 
            className="input" 
            onChange={this.handleChange} 
            placeholder={this.props.placeHolder}>
        </input>
    );
  }
}

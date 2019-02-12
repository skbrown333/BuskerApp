import * as React from "react";

interface State {
  readonly value: string;
}
interface InputProps {
    onChange: any,
    placeHolder: string,
}
export class Input extends React.Component<InputProps, State> {
  readonly state: State;

  constructor(props: InputProps) {
    super(props);

    this.state = {
      value: "",
    };
  }

  render() {
    return (
        <input 
            type="text" 
            className="input" 
            onChange={this.props.onChange} 
            placeholder={this.props.placeHolder}>
        </input>
    );
  }
}

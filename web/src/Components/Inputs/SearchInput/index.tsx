import * as React from "react";

interface State {
  readonly value: string;
}
interface InputProps {
    onChange: any,
    placeHolder: string,
}
export class SearchInput extends React.Component<InputProps, State> {
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
            className="search-input" 
            onChange={this.props.onChange} 
            placeholder={this.props.placeHolder}>
        </input>
    );
  }
}

import * as React from "react";
import SearchIcon from "@material-ui/icons/Search";

interface State {
  readonly value: string;
}
interface InputProps {
  onChange: any;
  placeHolder: string;
}
export class SearchInput extends React.Component<InputProps, State> {
  readonly state: State;

  constructor(props: InputProps) {
    super(props);

    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div className="search-input">
        <SearchIcon className="__icon" />
        <input
          type="text"
          className="__input"
          onChange={this.props.onChange}
          placeholder={this.props.placeHolder}
        />
      </div>
    );
  }
}

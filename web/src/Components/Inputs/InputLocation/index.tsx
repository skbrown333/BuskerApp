import * as React from "react";
import * as ReactDOM from "react-dom";
import CheckIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

// @ts-ignore
const google = window.google;

interface State {
  readonly value: string;
  readonly class: string;
}
interface InputProps {
  onChange: any;
  placeHolder: string;
}
export class InputLocation extends React.Component<InputProps, State> {
  readonly state: State;
  searchBar: any;
  searchBarListener: any;

  constructor(props: InputProps) {
    super(props);

    this.state = {
      value: "",
      class: "empty"
    };

    this.placesChanged = this.placesChanged.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let input = ReactDOM.findDOMNode(this.refs.location_input);

    this.searchBar = new google.maps.places.SearchBox(input);
    this.searchBarListener = this.searchBar.addListener(
      "places_changed",
      this.placesChanged
    );
  }

  componentWillUnmount() {
    google.maps.event.removeListener(this.searchBarListener);
  }

  handleChange(event: any) {
    let value = event.target.value;
    let styleClass = !value || value === "" ? "empty" : "input-invalid";
    this.setState({ class: styleClass });
  }

  placesChanged() {
    this.searchBar.getPlaces();
    let data = this.searchBar.getPlaces();

    if (!data || !data.length) return;

    let lat = data[0].geometry.location.lat();
    let lng = data[0].geometry.location.lng();
    let address = data[0].formatted_address;

    this.setState({ class: "input-valid" });
    this.props.onChange({ lat: lat, lng: lng, address: address });
  }

  render() {
    return (
      <div className="input-location">
        <input
          ref="location_input"
          type="text"
          className={"input " + this.state.class}
          onChange={this.handleChange}
          onFocus={() => {
            this.setState({ class: "empty" });
            // @ts-ignore
            ReactDOM.findDOMNode(this.refs.location_input).value = "";
          }}
          placeholder={this.props.placeHolder}
        />
      </div>
    );
  }
}

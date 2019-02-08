import * as React from "react";
import * as ReactDOM from "react-dom";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

// @ts-ignore
const google = window.google;

interface SearchBarProps  {
  onPlacesChanged: (data: Array<any>) => {};
  onClose: () => {};
}

class SearchBar extends React.Component<SearchBarProps> {
  searchBar: any;
  searchBarListener: any;

  constructor(props: SearchBarProps) {
    super(props);

    this.onPlacesChanged = this.onPlacesChanged.bind(this);
  }
  onPlacesChanged() {
    if (this.props.onPlacesChanged) {
      this.searchBar.getPlaces();

      let data = this.searchBar.getPlaces();
      this.props.onPlacesChanged(data);
    }
  }
  componentDidMount() {
    let input = ReactDOM.findDOMNode(this.refs.input);

    this.searchBar = new google.maps.places.SearchBox(input);
    this.searchBarListener = this.searchBar.addListener(
      "places_changed",
      this.onPlacesChanged
    );
  }
  componentWillUnmount() {
    google.maps.event.removeListener(this.searchBarListener);
  }

  clearInput = () => {
    let input: any = ReactDOM.findDOMNode(this.refs.input);
    input.value = "";
  };

  render() {
    return (
      <div className="search-bar">
        <SearchIcon className="search-bar__icon" />
        <input
          ref="input"
          id="search-input"
          onChange={this.onPlacesChanged}
          onClick={this.clearInput}
          className="search-bar__input"
          placeholder="Search"
        />
        <IconButton
          className="search-bar__location"
          onClick={this.props.onClose}
        >
          <CloseIcon />
        </IconButton>
      </div>
    );
  }
}

export default SearchBar;

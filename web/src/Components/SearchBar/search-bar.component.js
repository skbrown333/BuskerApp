import React, { Component } from "react";
import ReactDOM from "react-dom";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import LocationIcon from "@material-ui/icons/MyLocation";
const google = window.google;

class SearchBar extends Component {
  onPlacesChanged = () => {
    let input = ReactDOM.findDOMNode(this.refs.input);

    if (this.props.onPlacesChanged) {
      this.searchBar.getPlaces();

      let data = this.searchBar.getPlaces();
      this.props.onPlacesChanged(data, input);
    }
  };
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
    let input = ReactDOM.findDOMNode(this.refs.input);
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
          onClick={this.props.getMyLocation}
          aria-label="Location"
        >
          <LocationIcon />
        </IconButton>
      </div>
    );
  }
}

export default SearchBar;

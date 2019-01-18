import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import LocationIcon from "@material-ui/icons/MyLocation";
const google = window.google;

class SearchBar extends Component {
  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.searchBar.getPlaces();

      let data = this.searchBar.getPlaces();
      this.props.onPlacesChanged(data);
    }
  };
  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBar = new google.maps.places.SearchBox(input);
    this.searchBarListener = this.searchBar.addListener(
      "places_changed",
      this.onPlacesChanged
    );
  }
  componentWillUnmount() {
    google.maps.event.removeListener(this.searchBarListener);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          ref="input"
          onChange={this.onPlacesChanged}
          className="search-bar__input"
          placeholder="Search"
        />
        <SearchIcon className="search-bar__icon" />
        <Divider className="search-bar__divider" />
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

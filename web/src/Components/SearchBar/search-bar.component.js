import React, { Component } from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import LocationIcon from "@material-ui/icons/MyLocation";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <InputBase className="input" placeholder="Search" />
        <IconButton className="icon" aria-label="Search">
          <SearchIcon />
        </IconButton>
        <Divider className="divider" />
        <IconButton className="location" aria-label="Location">
          <LocationIcon />
        </IconButton>
      </div>
    );
  }
}

export default SearchBar;

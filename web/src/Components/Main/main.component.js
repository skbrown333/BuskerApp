import React, { Component } from "react";

/* Components */
import Map from "../Map/map.component";
import Header from "../Header/header.component";
import SearchBar from "../SearchBar/search-bar.component";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Map />
      </div>
    );
  }
}

export default Main;

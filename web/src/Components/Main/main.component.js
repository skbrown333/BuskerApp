import React, { Component } from "react";

/* Components */
import Map from "../Map/map.component";
import Header from "../Header/header.component";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Map />
      </div>
    );
  }
}

export default Main;

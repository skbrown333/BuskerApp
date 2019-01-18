import React, { Component } from "react";

/* Components */
import GoogleMapReact from "google-map-react";

class Main extends Component {
  render() {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC7XkKGWf98yGpJSwphtLyGT-KfdDgIvLQ" }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={11}
          options={{ disableDefaultUI: true }}
        />
      </div>
    );
  }
}

export default Main;

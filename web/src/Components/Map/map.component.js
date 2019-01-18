import React, { Component } from "react";

/* Components */
import GoogleMapReact from "google-map-react";
import EventPin from "./EventPin/event-pin.component";
import SearchBar from "../SearchBar/search-bar.component";

/* Services */
import EventService from "../../Services/Event/event.service";
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;

class Main extends Component {
  state = {
    eventPins: [],
    center: {
      lat: 43.079,
      lng: -89.386408
    }
  };

  getEventPins() {
    if (this.state.eventPins.length) return;
    EventService.getAll().then(events => {
      this.setEventPins(events);
    });
  }

  setEventPins(events) {
    if (this.state.eventPins.length) return;

    let eventPins = events.map(event => {
      return (
        <EventPin
          key={event._id}
          lat={event.lat}
          lng={event.lng}
          event={event}
        />
      );
    });
    this.setState({ eventPins: eventPins });
  }

  search = data => {
    if (!data) return;

    let test = {
      lat: data[0].geometry.location.lat(),
      lng: data[0].geometry.location.lng()
    };

    this.setState({ center: test }, () => {});
  };

  getMyLocation = () => {
    const location = window.navigator && window.navigator.geolocation;
    let myLocation;

    if (location) {
      location.getCurrentPosition(
        position => {
          myLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.setState({ center: myLocation });
        },
        error => {
          myLocation = { lat: "err-latitude", lng: "err-longitude" };
          this.setState({ center: myLocation });
        }
      );
    }
  };

  componentDidMount() {
    this.getEventPins();
  }

  render() {
    return (
      <div className="map">
        <SearchBar
          onPlacesChanged={this.search}
          getMyLocation={this.getMyLocation}
        />
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.state.center}
          center={this.state.center}
          defaultZoom={11}
          options={{ disableDefaultUI: true }}
        >
          {this.state.eventPins}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Main;

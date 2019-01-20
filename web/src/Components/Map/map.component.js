import React, { Component } from "react";

/* Components */
import GoogleMapReact from "google-map-react";
import EventPin from "./EventPin/event-pin.component";
import SearchBar from "../SearchBar/search-bar.component";
import LinearProgress from "@material-ui/core/LinearProgress";

/* Services */
import EventService from "../../Services/Event/event.service";
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;

class Main extends Component {
  state = {
    eventPins: [],
    center: {
      lat: 43.079,
      lng: -89.386408
    },
    zoom: 12
  };

  componentDidMount() {
    this.getEventPins();
  }

  getEventPins() {
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
    if (!data || !data.length) return;

    let _center = {
      lat: data[0].geometry.location.lat(),
      lng: data[0].geometry.location.lng()
    };

    this.setState({ center: _center });
  };

  getMyLocation = () => {
    this.setState({ loading: true });
    const location = window.navigator && window.navigator.geolocation;
    let myLocation;

    if (location) {
      location.getCurrentPosition(
        position => {
          myLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.setState({ center: myLocation, loading: false, zoom: 15 });
        },
        error => {
          this.setState({ loading: false });
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }
  };

  isLoading() {
    if (this.state.loading) {
      return (
        <div className="loading-bar-container">
          <LinearProgress className="loading-bar" color="secondary" />
        </div>
      );
    } else {
      return null;
    }
  }

  onChange = properties => {
    this.setState({ center: properties.center, zoom: properties.zoom });
  };

  render() {
    return (
      <div className="map">
        {this.isLoading()}
        <SearchBar
          onPlacesChanged={this.search}
          getMyLocation={this.getMyLocation}
        />
        <GoogleMapReact
          ref="map"
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={{
            lat: 43.079,
            lng: -89.386408
          }}
          center={this.state.center}
          zoom={this.state.zoom}
          defaultZoom={11}
          onChange={this.onChange}
          options={{
            disableDefaultUI: true,
            gestureHandling: "greedy",
            enableHighAccuracy: true
          }}
        >
          {this.state.eventPins}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Main;

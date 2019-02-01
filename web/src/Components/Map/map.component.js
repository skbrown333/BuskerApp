import React, { Component } from "react";

/* Components */
import GoogleMapReact from "google-map-react";
import EventPin from "./EventPin/event-pin.component";
import LinearProgress from "@material-ui/core/LinearProgress";
import IconButton from "@material-ui/core/IconButton";
import LocationIcon from "@material-ui/icons/MyLocation";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CreateIcon from "@material-ui/icons/Create";

/* Dialogs */
import SearchDialog from "../../Dialogs/SearchDialog/search.dialog";
import CreateEventDialog from "../../Dialogs/CreateEventDialog/create-event.dialog";

/* Services */
import EventService from "../../Services/Event/event.service";
import AccountService from "../../Services/Account/account.service";

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

class Main extends Component {
  state = {
    eventPins: [],
    center: {
      lat: 43.079,
      lng: -89.386408
    },
    zoom: 12,
    searchOpen: false,
    createEvent: false
  };

  componentDidMount() {
    this.getEventPins();
  }

  async getEventPins() {
    let events = await EventService.getAll();
    await Promise.all(
      events.map(async event => {
        let account = await AccountService.getById(event._id);
        event.user = account.name;
      })
    );

    this.setEventPins(events);
  }

  setEventPins(events) {
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

    this.setState({ center: _center, zoom: 14, searchOpen: false });
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
          this.setState({ center: myLocation, loading: false, zoom: 14 });
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
          <LinearProgress className="loading-bar" color="primary" />
        </div>
      );
    } else {
      return null;
    }
  }

  onChange = properties => {
    this.setState({ center: properties.center, zoom: properties.zoom });
  };

  onClick = () => {
    this.setState({ searchOpen: true });
  };

  onClose = () => {
    this.setState({ searchOpen: false });
  };

  render() {
    return (
      <div className="map">
        {this.isLoading()}
        <div className="map-actions">
          <IconButton
            className="map-actions__icon-button"
            onClick={this.onClick}
            aria-label="Search"
          >
            <SearchIcon className="map-actions__icon" />
          </IconButton>
          <SearchDialog
            open={this.state.searchOpen}
            onClose={this.onClose}
            search={this.search}
          />
          <IconButton
            className="map-actions__icon-button"
            onClick={this.getMyLocation}
            aria-label="Location"
          >
            <LocationIcon className="map-actions__icon" />
          </IconButton>
          <IconButton
            className="map-actions__icon-button"
            onClick={() => {
              this.setState({ createEvent: true });
            }}
          >
            <CreateIcon className="map-actions__icon" />
          </IconButton>
          <CreateEventDialog
            open={this.state.createEvent}
            addEvent={() => {
              this.getEventPins();
            }}
            onClose={() => {
              this.setState({ createEvent: false });
            }}
          />
        </div>

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

import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import EventService from "../../Services/Event/event.service";

// @ts-ignore
const google = window.google;
interface CreateEventProps {
  addEvent: any;
  onClose: any;
  open: boolean;
}
interface State {
  readonly fullScreen: boolean;
  readonly name: string;
  readonly start_time: string;
  readonly end_time: string;
  readonly lat: any;
  readonly lng: any;
  readonly description: string;
  readonly address: string;
}
export class CreateEventDialog extends React.Component<any, State> {
  readonly state: State;
  resizeListener: any;
  searchBar: any;
  searchBarListener: any;

  constructor(props: any) {
    super(props);

    this.state = {
      fullScreen: false,
      name: "",
      start_time: "",
      end_time: "",
      lat: null,
      lng: null,
      description: "",
      address: ""
    };

    this.createEvent = this.createEvent.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onPlacesChanged = this.onPlacesChanged.bind(this);
    this.resize = this.resize.bind(this);
  }

  handleOpen() {
    this.resizeListener = window.addEventListener("resize", this.resize);
    this.resize();

    let input = ReactDOM.findDOMNode(this.refs.input);

    this.searchBar = new google.maps.places.SearchBox(input);
    this.searchBarListener = this.searchBar.addListener(
      "places_changed",
      this.onPlacesChanged
    );
  }

  handleClose() {
    window.removeEventListener("resize", this.resizeListener);
    google.maps.event.removeListener(this.searchBarListener);
    this.props.onClose();
  }

  resize() {
    this.setState({ fullScreen: window.innerWidth <= 760 });
  }

  onPlacesChanged() {
    this.searchBar.getPlaces();
    let data = this.searchBar.getPlaces();

    if (!data || !data.length) return;

    let lat = data[0].geometry.location.lat();
    let lng = data[0].geometry.location.lng();
    let address = data[0].formatted_address;

    this.setState({ lat: lat, lng: lng, address: address });
  }

  async createEvent() {
    let options = {
      account: this.props.account._id,
      name: this.state.name,
      start_time: this.state.start_time,
      end_time: this.state.end_time,
      description: this.state.description,
      lat: this.state.lat,
      lng: this.state.lng,
      address: this.state.address
    };

    try {
      await EventService.create(options);
      this.props.addEvent();
      this.props.onClose();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Dialog
        onClose={this.handleClose}
        onEnter={this.handleOpen}
        open={this.props.open}
        className="create-event-dialog"
        fullScreen={this.state.fullScreen}
        fullWidth={true}
        maxWidth={"md"}
      >
        <div className="create-event-header">
          <div className="header-title">New Event</div>
        </div>
        <div className="create-event-content">
          <div className="content-input">
            <input
              type="text"
              className="input"
              placeholder="Event Name"
              onChange={event => {
                this.setState({ name: event.target.value });
              }}
            />
            <input
              type="time"
              className="input time"
              placeholder="Start Time"
              onChange={event => {
                this.setState({ start_time: event.target.value });
              }}
            />
            <input
              type="time"
              className="input time"
              placeholder="End Time"
              onChange={event => {
                this.setState({ end_time: event.target.value });
              }}
            />
            <input
              ref="input"
              className="input"
              placeholder="Location"
              onChange={this.onPlacesChanged}
            />
            <textarea
              className="input description"
              placeholder="Description"
              onChange={event => {
                this.setState({ description: event.target.value });
              }}
            />
          </div>
        </div>
        <div className="event-dialog-controls">
          <Button className="event-dialog-control" onClick={this.createEvent}>
            Create
          </Button>
          <Button className="event-dialog-control" onClick={this.props.onClose}>
            Close
          </Button>
        </div>
      </Dialog>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    account: state.account
  };
};

export const CreateEventDialogContainer = connect(
  mapStateToProps,
  null
)(CreateEventDialog);
export default CreateEventDialogContainer;

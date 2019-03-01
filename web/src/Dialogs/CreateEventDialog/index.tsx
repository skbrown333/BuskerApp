import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import EventService from "../../Services/Event/event.service";
import { addEvent } from "../../store/actions";
import { InputLocation } from "../../Components/Inputs/InputLocation";
import { Input } from "../../Components/Inputs/Input";
import AccountService from "../../Services/Account/account.service";

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
  }

  handleClose() {
    window.removeEventListener("resize", this.resizeListener);
    this.props.onClose();
  }

  resize() {
    this.setState({ fullScreen: window.innerWidth <= 760 });
  }

  onPlacesChanged(location: any) {
    this.setState({
      lat: location.lat,
      lng: location.lng,
      address: location.address
    });
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
      let event = await EventService.create(options);
      this.props.addEvent(event);
      this.props.updateEvents();
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
              type="file"
              onChange={async (file: any) => {
                console.log("file: ", file.target.files[0]);
                const data = new FormData();
                data.append(
                  "file",
                  file.target.files[0],
                  file.target.files[0].name
                );
                let res = await AccountService.uploadPhoto(data);
                console.log("res: ", res);
              }}
            />
            <Input
              type="text"
              placeHolder="Event Name"
              onChange={(value: any) => {
                this.setState({ name: value });
              }}
            />
            <Input
              type="time"
              className="input time"
              placeHolder="Start Time"
              onChange={(value: any) => {
                this.setState({ start_time: value });
              }}
            />
            <Input
              type="time"
              className="input time"
              placeHolder="Start Time"
              onChange={(value: any) => {
                this.setState({ end_time: value });
              }}
            />
            <InputLocation
              onChange={this.onPlacesChanged}
              placeHolder="Location"
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

const mapDispatchToProps = (dispatch: any) => ({
  addEvent: (event: any) => dispatch(addEvent(event))
});

export const CreateEventDialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEventDialog);
export default CreateEventDialogContainer;

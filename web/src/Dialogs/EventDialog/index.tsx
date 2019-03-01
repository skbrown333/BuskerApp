import * as React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import UserIcon from "@material-ui/icons/PersonOutlined";
import LocationIcon from "@material-ui/icons/PlaceOutlined";
import HeartIcon from "@material-ui/icons/Favorite";
import HeartIconOutline from "@material-ui/icons/FavoriteBorder";
import TimeIcon from "@material-ui/icons/AccessTime";
import { Event } from "../../modules/Event";
import accountService from "../../Services/Account/account.service";

interface EventProps {
  onClose: any;
  open: boolean;
  event: any;
}

interface State {
  readonly fullScreen: boolean;
}

class EventDialog extends React.Component<EventProps, State> {
  readonly state: State;
  resizeListener: any;

  constructor(props: EventProps) {
    super(props);
    this.state = {
      fullScreen: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.resize = this.resize.bind(this);
  }

  handleOpen() {
    // @ts-ignore
    this.resizeListener = window.addEventListener("resize", this.resize);
    this.resize();
  }

  handleClose() {
    window.removeEventListener("resize", this.resizeListener);
    this.props.onClose();
  }

  resize() {
    this.setState({ fullScreen: window.innerWidth <= 960 });
  }

  render() {
    let event = this.props.event;

    return (
      <Dialog
        onClose={this.handleClose}
        onEnter={this.handleOpen}
        open={this.props.open}
        aria-labelledby="simple-dialog-title"
        className="event-dialog"
        fullScreen={this.state.fullScreen}
        fullWidth={true}
        maxWidth={"sm"}
      >
        <div className="event-dialog-content">
          <div className="event-content">
            <img className={"event-dialog-photo"} src={event.img} />
            <div className="event-info">
              <div className="event-info__item">
                <UserIcon className="event-item__icon user" />
                <div>
                  {event.account.first_name} {event.account.last_name}
                </div>
              </div>
              <div className="event-info__item time">
                <TimeIcon className="event-item__icon time" />
                {event.start_time} - {event.end_time}
                <div />
              </div>
              <div className="event-info__item location">
                <LocationIcon className="event-item__icon" />
                <div>{event.address}</div>
              </div>
            </div>
            <div className="event-dialog__description">
              <div className="event-description__title">{event.name}:</div>
              <div className="event-description__content">
                {event.description}
              </div>
            </div>
          </div>
          <div className="event-dialog-controls">
            <Button
              className="event-dialog-control"
              onClick={this.props.onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </Dialog>
    );
  }
}

export default EventDialog;

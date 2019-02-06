import * as React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import UserIcon from "@material-ui/icons/PersonOutlined";
import LocationIcon from "@material-ui/icons/PlaceOutlined";
import HeartIcon from "@material-ui/icons/Favorite";
import HeartIconOutline from "@material-ui/icons/FavoriteBorder";
import TimeIcon from "@material-ui/icons/AccessTime";

class EventDialog extends React.Component<any, {}> {
  constructor(props) {
    super(props);
    this.state = {
      fullScreen: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
    this.setState({ fullScreen: window.innerWidth <= 960 });
  }

  render() {
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
            <div className={"event-dialog-photo"} />
            <div className="event-info">
              <div className="event-info__item">
                <UserIcon className="event-item__icon user" />
                <div>{this.props.event.user}</div>
              </div>
              <div className="event-info__item location">
                <LocationIcon className="event-item__icon" />
                <div>{this.props.event.address}</div>
              </div>
              <div className="event-info__item love">
                <HeartIcon className="event-item__icon love" />
                <div>(112)</div>
              </div>
              <div className="event-info__item time">
                <TimeIcon className="event-item__icon time" />
                <div>
                  {this.props.event.start_time} - {this.props.event.end_time}
                </div>
              </div>
            </div>
            <div className="event-dialog__description">
              <div className="event-description__title">
                {this.props.event.name}:
              </div>
              <div className="event-description__content">
                {this.props.event.description}
              </div>
            </div>
          </div>
          <div className="event-dialog-controls">
            <Button className="event-dialog-control">
              <HeartIconOutline className="love" />
            </Button>
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

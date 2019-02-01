import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

class EventDialog extends Component {
  state = {
    fullScreen: false
  };
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ fullScreen: window.innerWidth <= 760 });
  }

  render() {
    return (
      <Dialog
        onClose={this.props.onClose}
        open={this.props.open}
        className="create-event-dialog"
        fullScreen={this.state.fullScreen}
        fullWidth={true}
        maxWidth={"md"}
      >
        <div className="create-event-header">
          <div className="header-title">New Event</div>
          <div className="header-actions">
            <Button className="header-save">Save</Button>
            <IconButton className="header-close" onClick={this.props.onClose}>
              <CloseIcon className="header-close__icon" />
            </IconButton>
          </div>
        </div>
        <div className="create-event-content">
          <div className="content-input">
            <input
              type="text"
              className="input"
              placeholder="Event Name"
              onChange={() => {}}
            />
            <input
              type="time"
              className="input time"
              placeholder="Start Time"
              onChange={() => {}}
            />
            <input
              type="time"
              className="input time"
              placeholder="End Time"
              onChange={() => {}}
            />
            <input
              type="text"
              className="input"
              placeholder="Location"
              onChange={() => {}}
            />
            <textarea
              className="input description"
              placeholder="Description"
              onChange={() => {}}
            />
          </div>
        </div>
      </Dialog>
    );
  }
}

export default EventDialog;

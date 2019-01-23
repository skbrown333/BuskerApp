import React, { Component } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import MapComponent from "../../Components/Map/map.component";
import Button from "@material-ui/core/Button";
class EventDialog extends Component {
  render() {
    return (
      <Dialog
        onClose={this.props.onClose}
        open={this.props.open}
        className="create-event-dialog"
        fullScreen={true}
        maxWidth={"xl"}
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
          <MapComponent />
        </div>
      </Dialog>
    );
  }
}

export default EventDialog;

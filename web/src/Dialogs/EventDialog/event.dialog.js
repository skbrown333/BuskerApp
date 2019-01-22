import React, { Component } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import UserIcon from "@material-ui/icons/PersonOutlined";
import LocationIcon from "@material-ui/icons/PlaceOutlined";
import HeartIcon from "@material-ui/icons/Favorite";

class EventDialog extends Component {
  render() {
    return (
      <Dialog
        onClose={this.props.onClose}
        open={this.props.open}
        aria-labelledby="simple-dialog-title"
        className="event-dialog"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="simple-dialog-title">
          <div className="event-dialog-photo" />
        </DialogTitle>
        <div className="event-dialog-content">
          <div className="event-dialog__user">
            <UserIcon className="event-dialog-user__icon" />
            <div>{this.props.user}</div>
          </div>
          <div className="event-dialog__location">
            <LocationIcon className="event-dialog-location__icon" />
            <div>142 West Johnson Street</div>
          </div>
          <div className="event-dialog__love">
            <HeartIcon className="event-dialog-love__icon" />
            <div>112</div>
          </div>
          <div className="event-dialog__description">
            <div className="event-dialog-description__title">
              {this.props.event.name}:
            </div>
            <div className="event-dialog-description__content">
              come check us out if you want.
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
}

export default EventDialog;

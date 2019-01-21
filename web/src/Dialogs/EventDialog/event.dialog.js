import React, { Component } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

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
        <div className="event-dialog-content" />
      </Dialog>
    );
  }
}

export default EventDialog;

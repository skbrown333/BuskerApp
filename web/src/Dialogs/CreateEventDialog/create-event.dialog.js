import React, { Component } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

class EventDialog extends Component {
  render() {
    return (
      <Dialog
        onClose={this.props.onClose}
        open={this.props.open}
        className="search-dialog"
        fullScreen={true}
      >
        <DialogTitle>
          <div className="" />
          New Event
        </DialogTitle>
      </Dialog>
    );
  }
}

export default EventDialog;

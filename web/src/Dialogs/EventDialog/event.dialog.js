import React, { Component } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

class EventDialog extends Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    return (
      <Dialog
        onClose={this.handleClose}
        open={this.props.open}
        aria-labelledby="simple-dialog-title"
        className="event-dialog"
      >
        <DialogTitle id="simple-dialog-title">
          {this.props.event.name}
        </DialogTitle>
        <div className="event-dialog-content">Hello</div>
      </Dialog>
    );
  }
}

export default EventDialog;

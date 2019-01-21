import React, { Component } from "react";

/* Components */

import EventDialog from "../../../Dialogs/EventDialog/event.dialog";

/* Icons */
import PersonPin from "@material-ui/icons/PersonPin";

class EventPin extends Component {
  state = {
    open: false
  };

  onClick = () => {
    this.setState({ open: true });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  render() {
    let event = this.props.event;

    return (
      <div className="event-pin" name={event.name}>
        <EventDialog
          onClose={this.onClose}
          open={this.state.open}
          event={this.props.event}
        />
        <div className="event-pin__icon-background" />
        <PersonPin className="event-pin__icon" onClick={this.onClick} />
      </div>
    );
  }
}

export default EventPin;

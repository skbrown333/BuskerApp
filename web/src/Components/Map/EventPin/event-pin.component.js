import React, { Component } from "react";

/* Icons */
import PersonPin from "@material-ui/icons/PersonPin";

class EventPin extends Component {
  render() {
    let event = this.props.event;

    return (
      <div className="event-pin" name={event.name}>
        <div className="event-pin__icon-background" />
        <PersonPin className="event-pin__icon" />
      </div>
    );
  }
}

export default EventPin;

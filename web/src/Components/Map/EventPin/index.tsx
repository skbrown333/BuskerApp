import * as React from "react";

/* Components */

import EventDialog from "../../../Dialogs/EventDialog";
import { EventPinProps } from "./EventPin.interfaces";

/* Services */

/* Icons */
import PersonPin from "@material-ui/icons/PersonPin";

interface State {
  readonly open: boolean;
}

export class EventPin extends React.Component<EventPinProps, State> {
  readonly state: State = {
    open: false
  };

  onClick = () => {
    this.setState({ open: true });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="event-pin">
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

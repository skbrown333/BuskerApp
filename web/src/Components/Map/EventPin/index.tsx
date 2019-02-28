import * as React from "react";

/* Components */

import EventDialog from "../../../Dialogs/EventDialog";
import { EventPinProps } from "./EventPin.interfaces";

/* Services */

/* Icons */

interface State {
  readonly open: boolean;
  readonly class: string;
}

export class EventPin extends React.Component<EventPinProps, State> {
  readonly state: State = {
    open: false,
    class: ""
  };

  componentDidMount() {
    if(!this.props.event) return;
    let account:any = this.props.event.account;
  }
  
  onClick = () => {
    this.setState({ open: true });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  render() {
    let event = this.props.event;
    return (
      <div className="event-pin">
        <EventDialog
          onClose={this.onClose}
          open={this.state.open}
          event={event}
        />
        <img className={"event-pin__icon " + this.state.class} src={event.img} alt="" onClick={this.onClick}/>
      </div>
    );
  }
}

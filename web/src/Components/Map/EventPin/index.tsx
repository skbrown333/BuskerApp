import * as React from "react";

/* Components */

import EventDialog from "../../../Dialogs/EventDialog";
import { EventPinProps } from "./EventPin.interfaces";

/* Services */

/* Icons */
import PersonPin from "@material-ui/icons/AccountCircle";

interface State {
  readonly open: boolean;
}

export class EventPin extends React.Component<EventPinProps, State> {
  readonly state: State = {
    open: false,
  };

  componentDidMount() {
    if(!this.props.event.account) return;
    let account:any = this.props.event.account;
  }
  onClick = () => {
    this.setState({ open: true });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  render() {
    let account = this.props.event.account;
    return (
      <div className="event-pin">
        <EventDialog
          onClose={this.onClose}
          open={this.state.open}
          event={this.props.event}
        />
        <img className="event-pin__icon" src={account.img} alt="" onClick={this.onClick}/>
      </div>
    );
  }
}

import * as React from "react";

/* Components */

import EventDialog from "../../../Dialogs/EventDialog";
import { EventPinProps } from "./EventPin.interfaces";

/* Services */

/* Icons */
import PersonPin from "@material-ui/icons/AccountCircle";
import AccountService from "../../../Services/Account/account.service";

interface State {
  readonly open: boolean;
  readonly img: any;
}

export class EventPin extends React.Component<EventPinProps, State> {
  readonly state: State = {
    open: false,
    img: null,
  };

  componentDidMount() {
    if(!this.props.event.account) return;
    let account:any = this.props.event.account;
    console.log(this.props.event);
    let img = AccountService.getPhoto(account._id);
    this.setState({ img: img });
  }
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
        <img className="event-pin__icon" src={this.state.img} alt="" onClick={this.onClick}/>
      </div>
    );
  }
}

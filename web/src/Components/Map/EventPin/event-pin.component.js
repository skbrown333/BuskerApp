import React, { Component } from "react";

/* Components */

import EventDialog from "../../../Dialogs/EventDialog/event.dialog";

/* Services */
import AccountService from "../../../Services/Account/account.service";

/* Icons */
import PersonPin from "@material-ui/icons/PersonPin";

class EventPin extends Component {
  state = {
    open: false,
    user: null
  };

  onClick = () => {
    this.getUser();
    this.setState({ open: true });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  getUser() {
    console.log(this.props.event.account);
    AccountService.getById(this.props.event.account).then(res => {
      console.log(res);
      this.setState({ user: res.name });
    });
  }

  render() {
    let event = this.props.event;

    return (
      <div className="event-pin" name={event.name}>
        <EventDialog
          onClose={this.onClose}
          open={this.state.open}
          event={this.props.event}
          user={this.state.user}
        />
        <div className="event-pin__icon-background" />
        <PersonPin className="event-pin__icon" onClick={this.onClick} />
      </div>
    );
  }
}

export default EventPin;

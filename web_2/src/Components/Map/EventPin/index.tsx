import * as React from "react";

/* Components */

//import EventDialog from "../../../Dialogs/EventDialog/event.dialog";

/* Services */
//import AccountService from "../../../Services/Account/account.service";

/* Icons */
import PersonPin from "@material-ui/icons/PersonPin";

export class EventPin extends React.Component<any, {}> {
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
    return (
      <div className="event-pin" name={this.props.event.name}>
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

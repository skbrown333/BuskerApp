import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import GlobeIcon from "@material-ui/icons/Public";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import EventIcon from "@material-ui/icons/CalendarToday";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <IconButton>
          <GlobeIcon />
        </IconButton>
        <IconButton>
          <EventIcon />
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </div>
    );
  }
}

export default Header;

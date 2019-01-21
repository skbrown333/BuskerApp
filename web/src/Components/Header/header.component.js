import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import GlobeIcon from "@material-ui/icons/Public";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import EventIcon from "@material-ui/icons/CalendarToday";

class Header extends Component {
  componentDidMount() {}

  render() {
    return (
      <div id="header" className="header">
        <IconButton>
          <GlobeIcon className="header-icon selected" />
        </IconButton>
        <IconButton>
          <EventIcon className="header-icon" />
        </IconButton>
        <IconButton>
          <PersonIcon className="header-icon" />
        </IconButton>
      </div>
    );
  }
}

export default Header;

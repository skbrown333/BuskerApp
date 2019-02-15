import * as React from "react";
import { Link } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import GlobeIcon from "@material-ui/icons/Public";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import EventIcon from "@material-ui/icons/CalendarToday";

export class Header extends React.Component<any, {}> {
  render() {
    return (
      <div id="header" className="header">
        <IconButton>
          <Link to="/">
            <GlobeIcon className="header-icon selected" />
          </Link>
        </IconButton>
        <IconButton>
          <EventIcon className="header-icon" />
        </IconButton>
        <IconButton>
          <Link to="/profile">
            <PersonIcon className="header-icon" />
          </Link>
        </IconButton>
      </div>
    );
  }
}

import * as React from "react";

import IconButton from "@material-ui/core/IconButton";
import GlobeIcon from "@material-ui/icons/Public";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import EventIcon from "@material-ui/icons/CalendarToday";

export class Header extends React.Component<any, {}> {
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

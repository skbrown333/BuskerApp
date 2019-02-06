import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import LocationIcon from "@material-ui/icons/MyLocation";
import SearchIcon from "@material-ui/icons/Search";
import BuildingIcon from "@material-ui/icons/Domain";
import CreateIcon from "@material-ui/icons/Create";
import Tooltip from "@material-ui/core/Tooltip";
import { MapActionProps } from "./MapAction.interfaces";

export class MapActions extends React.Component<MapActionProps> {
  constructor(props: MapActionProps) {
    super(props);
  }
  render() {
    return (
      <div className="map-actions">
        <Tooltip
          title="Search"
          placement="left"
          enterDelay={500}
          leaveDelay={200}
        >
          <IconButton
            className="map-actions__icon-button"
            onClick={this.props.onSearchOpen}
            aria-label="Search"
          >
            <SearchIcon className="map-actions__icon" />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="My Location"
          placement="left"
          enterDelay={500}
          leaveDelay={200}
        >
          <IconButton
            className="map-actions__icon-button"
            onClick={this.props.getMyLocation}
            aria-label="Location"
          >
            <LocationIcon className="map-actions__icon" />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Create Event"
          placement="left"
          enterDelay={500}
          leaveDelay={200}
        >
          <IconButton
            className="map-actions__icon-button"
            onClick={this.props.onCreateEventOpen}
          >
            <CreateIcon className="map-actions__icon" />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Buildings"
          placement="left"
          enterDelay={500}
          leaveDelay={200}
        >
          <IconButton className="map-actions__icon-button" onClick={() => {}}>
            <BuildingIcon className="map-actions__icon" />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

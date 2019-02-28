import * as React from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import LocationIcon from "@material-ui/icons/MyLocation";
import SearchIcon from "@material-ui/icons/Search";
import CreateIcon from "@material-ui/icons/Create";
import Tooltip from "@material-ui/core/Tooltip";

export class MapActions extends React.Component<any> {
  constructor(props: any) {
    super(props);

    this.isPriest = this.isPriest.bind(this);
  }

  isPriest() {
    let account = this.props.account;

    if (account) {
      return (
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
      );
    }
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

        {this.isPriest()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    account: state.account
  };
};

export const MapActionsContainer = connect(
  mapStateToProps,
  null
)(MapActions);
export default MapActionsContainer;

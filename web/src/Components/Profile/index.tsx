import * as React from "react";
import { connect } from "react-redux";
import LocationIcon from "@material-ui/icons/PlaceOutlined";
import SettingsIcon from "@material-ui/icons/Edit";
import { Redirect } from "react-router";
import { Map } from "../Map";
import { IconButton } from "@material-ui/core";

export class Profile extends React.Component<any> {
  constructor(props: any) {
    super(props);

    this.getContent = this.getContent.bind(this);
  }

  getContent() {
    let account = this.props.account;
    if (!account || !account._id) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="profile">
        <div className="profile-content">
          <div className="profile-photo">
          </div>
          <div className="profile-info">
            <div className="profile-info__name">
              {account.name}
              <IconButton className="profile-info__settings">
                <SettingsIcon />
              </IconButton>
            </div>
            <div className="profile-info__address">
              <LocationIcon className="location-icon" />
              {account.address}
            </div>
          </div>
        </div>
        <Map hideActions={true} center={{lat: account.lat, lng: account.lng}} />
      </div>
    );
  }

  render() {
    return this.getContent();
  }
}

const mapStateToProps = (state: any) => {
  return {
    account: state.account
  };
};

export const ProfileContainer = connect(mapStateToProps)(Profile);
export default ProfileContainer;

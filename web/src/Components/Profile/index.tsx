import * as React from "react";
import { connect } from "react-redux";
import LocationIcon from "@material-ui/icons/PlaceOutlined";
import SettingsIcon from "@material-ui/icons/Edit";
import { Redirect } from "react-router";
import MapContainer from "../Map";
import { IconButton } from "@material-ui/core";

export class Profile extends React.Component<any, any> {
  readonly state: any;

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
          <img className="profile-photo" src={account.img} alt="" />
          <div className="profile-info">
            <div className="profile-info__name">
              {account.first_name} {account.last_name}
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
        <MapContainer
          hideActions={true}
          center={{ lat: account.lat, lng: account.lng }}
        />
      </div>
    );
  }

  render() {
    return this.getContent();
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    account: state.account,
    cookies: ownProps.cookies
  };
};

export const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;

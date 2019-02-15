import * as React from "react";
import { connect } from "react-redux";
import UserIcon from "@material-ui/icons/PersonOutlined";
import LocationIcon from "@material-ui/icons/PlaceOutlined";
import accountService from "../../Services/Account/account.service";
import { Redirect } from "react-router";

export class Profile extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  getContent() {
    let account = this.props.account;
    if (!account || !account._id) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="event-dialog-content">
        <div className="event-content">
          <div className={"event-dialog-photo"} />
          <div className="event-info">
            <div className="event-info__item">
              <UserIcon className="event-item__icon user" />
              <div>{this.props.account.name}</div>
            </div>
            <div className="event-info__item location">
              <LocationIcon className="event-item__icon" />
              <div>{this.props.account.address}</div>
            </div>
          </div>
        </div>
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

import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import UserOverview from "./UserOverview";
import AddNewUser from "./adduser/AddNewUser";
import CustomizeUser from "./customizeuser/CustomizeUser";
import OutsideAlerter from "../OutsideAlerter";
export class Settings extends Component {
  render() {
    return (
      <div>
        <OutsideAlerter>
          <div>
            <Route exact path='/settings'>
              <div>
                <UserOverview
                  users={this.props.users}
                  activeUser={this.props.activeUser}
                  activateUser={this.props.activateUser}
                  deleteUser={this.props.deleteUser}
                  resetAllUsers={this.props.resetAllUsers}
                />
              </div>
            </Route>
            <Route path='/settings/adduser'>
              <div>
                <AddNewUser
                  users={this.props.users}
                  addNewUser={this.props.addNewUser}
                />
              </div>
            </Route>
            <Route path='/settings/customizeuser'>
              <div>
                <CustomizeUser
                  setBackgroundImage={this.props.setBackgroundImage}
                />
              </div>
            </Route>
          </div>
        </OutsideAlerter>
      </div>
    );
  }
}

// Property Type Requirement
Settings.propTypes = {
  users: PropTypes.array.isRequired,
  activeUser: PropTypes.func.isRequired,
  addNewUser: PropTypes.func.isRequired,
  activateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  resetAllUsers: PropTypes.func.isRequired,
  setBackgroundImage: PropTypes.func.isRequired
};

export default Settings;

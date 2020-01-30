import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ActiveUser from "./ActiveUser";
import AdditionalUsers from "./AdditionalUsers";
import NoAdditionalUsers from "./NoAdditionalUsers";

class UserOverview extends Component {
  render() {
    return (
      <div>
        <div className='settings-content'>
          <div className='settings-header'>
            <span>
              <Link
                style={removeTextDecoration}
                className='close-settings'
                to='/'
              >
                &times;
              </Link>
            </span>
            <h2>Settings</h2>
          </div>
          <div className='settings-body'>
            <ActiveUser activeUser={this.props.activeUser} />
            {this.props.users.length > 1 ? (
              <AdditionalUsers
                users={this.props.users}
                activateUser={this.props.activateUser}
                deleteUser={this.props.deleteUser}
              />
            ) : (
              <NoAdditionalUsers />
            )}
            <div id='settings-buttons'>
              <Link style={removeTextDecoration} to='/settings/adduser'>
                <button
                  type='button'
                  className='settings-button'
                  id='new-user-button'
                >
                  Add User
                </button>
              </Link>
              <button
                type='button'
                className='settings-button'
                id='reset-users-button'
                onClick={this.props.resetAllUsers}
              >
                Reset Users
              </button>
            </div>
          </div>
          <div className='settings-footer'></div>
        </div>
      </div>
    );
  }
}

const removeTextDecoration = {
  textDecoration: "none"
};

// Property Type Requirement
UserOverview.propTypes = {
  users: PropTypes.array.isRequired,
  activeUser: PropTypes.func.isRequired,
  activateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  resetAllUsers: PropTypes.func.isRequired
};

export default UserOverview;

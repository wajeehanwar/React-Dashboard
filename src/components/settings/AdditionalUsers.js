import React, { Component } from "react";
import PropTypes from "prop-types";
import AdditionalUser from "./AdditionalUser";

export class AdditionalUsers extends Component {
  additionalUserList = () => {
    return this.props.users.map(user => {
      if (user.active || user.id === "0") {
        return null;
      } else {
        return (
          <AdditionalUser
            key={user.id}
            user={user}
            activateUser={this.props.activateUser}
            deleteUser={this.props.deleteUser}
          />
        );
      }
    });
  };

  render() {
    return (
      <div>
        <h3 id='additional-users-label'>Additional Users</h3>
        <div className='additional-users'>
          <ul className='user-list'>{this.additionalUserList()}</ul>
        </div>
      </div>
    );
  }
}

// Property Type Requirement
AdditionalUsers.propTypes = {
  users: PropTypes.array.isRequired,
  activateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default AdditionalUsers;

import React, { Component } from "react";
import PropTypes from "prop-types";

export class AdditionalUser extends Component {
  onClickActivate = e => {
    e.preventDefault();
    this.props.activateUser(this.props.user.id);
  };

  onClickDelete = e => {
    e.preventDefault();
    this.props.deleteUser(this.props.user.id);
  };

  render() {
    return (
      <div className='additional-user'>
        <div id='additional-user-name'>
          {`${this.props.user.firstName} ${this.props.user.lastName}`}
        </div>
        <input
          type='button'
          value='Activate'
          id='set-current-user-button'
          onClick={this.onClickActivate}
        />
        <input
          type='button'
          value='Delete'
          id='remove-user-button'
          onClick={this.onClickDelete}
        />
      </div>
    );
  }
}

// Property Type Requirement
AdditionalUser.propTypes = {
  user: PropTypes.object.isRequired,
  activateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default AdditionalUser;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class ActiveUser extends Component {
  render() {
    return (
      <div>
        <span>
          <h3 id='current-user-label'>Active User</h3>
        </span>
        <span>
          <Link style={removeTextDecoration} to='/settings/customizeuser'>
            <button
              className='tooltip customize-user'
              type='submit'
              value='&#9881;'
            >
              <div className='icon-customize'></div>
              <span className='tooltip-customize'>Customize</span>
            </button>
          </Link>
        </span>
        <div className='current-user'>{`${this.props.activeUser().firstName} ${
          this.props.activeUser().lastName
        }`}</div>
      </div>
    );
  }
}

const removeTextDecoration = {
  textDecoration: "none"
};

// Property Type Requirement
ActiveUser.propTypes = {
  activeUser: PropTypes.func.isRequired
};
export default ActiveUser;

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class AddNewUser extends Component {
  state = {
    firstName: "",
    lastName: "",
    dobDay: "0",
    dobMonth: "0",
    country: "USA"
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    // Check for duplicate user.
    let userExists = false;
    for (let i = 0; i < this.props.users.length; i++) {
      if (
        this.state.firstName === this.props.users[i].firstName &&
        this.state.lastName === this.props.users[i].lastName
      ) {
        userExists = true;
      }
    }

    // Handle incomplete form or duplicate user.
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.dobDay === "0" ||
      this.state.dobMonth === "0"
    ) {
      const nuError = document.querySelector("#nu-error");
      nuError.setAttribute("class", "nu-error");
      nuError.appendChild(
        document.createTextNode("Oops! You forgot to fill something!")
      );

      setTimeout(() => {
        nuError.remove();
        const error = document.querySelector("#error");
        const div = document.createElement("div");
        div.setAttribute("id", "nu-error");
        error.appendChild(div);
      }, 3000);
    } else if (userExists) {
      const nuError = document.querySelector("#nu-error");
      nuError.setAttribute("class", "nu-error");
      nuError.appendChild(document.createTextNode("You are already a exist!"));

      setTimeout(() => {
        nuError.remove();
        const error = document.querySelector("#error");
        const div = document.createElement("div");
        div.setAttribute("id", "nu-error");
        error.appendChild(div);
      }, 3000);

      // Reset state
      this.setState({
        firstName: "",
        lastName: "",
        dobDay: "0",
        dobMonth: "0",
        country: "USA"
      });
    } else {
      this.props.addNewUser(
        this.state.firstName,
        this.state.lastName,
        Number(this.state.dobDay),
        Number(this.state.dobMonth),
        this.state.country
      );

      // Reset state
      this.setState({
        firstName: "",
        lastName: "",
        dobDay: "0",
        dobMonth: "0",
        country: "USA"
      });

      // Redirect to settings route
      this.props.history.push("/settings");
    }
  };

  onCancel = e => {
    e.preventDefault();

    // Reset state
    this.setState({
      firstName: " ",
      lastName: " ",
      dobDay: "0",
      dobMonth: "0",
      country: "USA"
    });

    // Redirect to settings route
    this.props.history.push("/settings");
  };

  render() {
    return (
      <div>
        <div className='new-user-content'>
          <div id='new-user-label'>
            <h3>Create New User</h3>
          </div>
          <form id='new-user-form' onSubmit={this.onSubmit}>
            <div>
              <label className='nu-label'>First Name</label>
              <input
                type='text'
                className='nu-name'
                id='nu-first-name'
                name='firstName'
                value={this.state.firstName}
                onChange={this.onChange}
              />
            </div>
            <div>
              <label className='nu-label'>Last Name</label>
              <input
                type='text'
                className='nu-name'
                id='nu-last-name'
                name='lastName'
                value={this.state.lastName}
                onChange={this.onChange}
              />
            </div>
            <div className='custom-select'>
              <label className='nu-label'>Date of Birth</label>
              <select
                id='nu-dob-day'
                name='dobDay'
                value={this.state.dobDay}
                onChange={this.onChange}
              >
                <option value='0'>Day</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
                <option value='16'>16</option>
                <option value='17'>17</option>
                <option value='18'>18</option>
                <option value='19'>19</option>
                <option value='20'>20</option>
                <option value='21'>21</option>
                <option value='22'>22</option>
                <option value='23'>23</option>
                <option value='24'>24</option>
                <option value='25'>25</option>
                <option value='26'>26</option>
                <option value='27'>27</option>
                <option value='28'>28</option>
                <option value='29'>29</option>
                <option value='30'>30</option>
                <option value='31'>31</option>
              </select>
              <select
                id='nu-dob-month'
                name='dobMonth'
                value={this.state.dobMonth}
                onChange={this.onChange}
              >
                <option value='0'>Month</option>
                <option value='1'>January</option>
                <option value='2'>Febuary</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
              </select>
            </div>
            <div className='custom-select'>
              <label className='nu-label'>Country</label>
              <select
                id='nu-country'
                name='country'
                value={this.state.country}
                onChange={this.onChange}
              >
                <option value='USA'>USA</option>
                <option value='China'>China</option>
              </select>
            </div>
            <div id='error'>
              <div id='nu-error'></div>
            </div>
            <div className='nu-save'>
              <input
                className='settings-button nu-save-button'
                type='submit'
                value='Create'
              />
              <input
                className='settings-button-cancel nu-save-button'
                type='reset'
                value='Cancel'
                onClick={this.onCancel}
              />
            </div>
          </form>

          <div className='settings-footer'></div>
        </div>
      </div>
    );
  }
}

// Property Type Requirement
AddNewUser.propTypes = {
  users: PropTypes.array.isRequired,
  addNewUser: PropTypes.func.isRequired
};

export default withRouter(AddNewUser);

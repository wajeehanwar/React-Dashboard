import React, { Component } from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import Welcome from "./Welcome";
import Message from "./Message";
export class Home extends Component {
  render() {
    return (
      <div>
        <Welcome
          getActiveUser={this.props.getActiveUser}
          getCurrentHour={this.props.getCurrentHour}
        />
        <Search />
        <Message
          getActiveUser={this.props.getActiveUser}
          getCurrentDay={this.props.getCurrentDay}
          getCurrentMonth={this.props.getCurrentMonth}
        />
      </div>
    );
  }
}

// Property Type Requirement
Home.propTypes = {
  getActiveUser: PropTypes.func.isRequired,
  getCurrentHour: PropTypes.func.isRequired,
  getCurrentDay: PropTypes.func.isRequired,
  getCurrentMonth: PropTypes.func.isRequired
};

export default Home;

import React, { Component } from "react";
import PropTypes from "prop-types";

export class Welcome extends Component {
  getPrefix = () => {
    // Get current time from App.js.
    const currentHour = this.props.getCurrentHour();
    const greetingPrefaces = ["Morning", "Afternoon", "Evening", "Night"];

    // Set appropriate greeting preface.
    if (currentHour >= 6 && currentHour < 12) {
      return greetingPrefaces[0];
    } else if (currentHour >= 12 && currentHour < 18) {
      return greetingPrefaces[1];
    } else if (currentHour >= 18 && currentHour < 22) {
      return greetingPrefaces[2];
    } else {
      return greetingPrefaces[3];
    }
  };

  render() {
    return (
      <div>
        <h1 className='welcome'>
          {this.props.getActiveUser().firstName !== ""
            ? `Good ${this.getPrefix()} ${
                this.props.getActiveUser().firstName
              }!`
            : `Good ${this.getPrefix()}!`}
        </h1>
      </div>
    );
  }
}

// Property Type Requirement
Welcome.propTypes = {
  getActiveUser: PropTypes.func.isRequired,
  getCurrentHour: PropTypes.func.isRequired
};

export default Welcome;

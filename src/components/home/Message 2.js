import React, { Component } from "react";
import PropTypes from "prop-types";
import Birthday from "./message/Birthday";
import Holiday from "./message/Holiday";
import Quote from "./message/Quote";

export class Message extends Component {
  isBirthday = () => {
    if (
      this.props.getCurrentDay() === this.props.getActiveUser().dobDay &&
      this.props.getCurrentMonth() === this.props.getActiveUser().dobMonth
    ) {
      return true;
    } else {
      return false;
    }
  };

  isHoliday = () => {
    const USA = [
      [1, 1, "New Year's Day"],
      [1, 20, "Martin Luther King Jr. Day"],
      [2, 14, "Valentine's Day"],
      [2, 17, "Presidents' Day"],
      [3, 3, "Super Tuesday"],
      [3, 17, "St. Patrick's Day"],
      [4, 12, "Easter"],
      [4, 13, "Easter"],
      [4, 15, "Tax Day"],
      [5, 5, "Cinco de Mayo"],
      [5, 10, "Mother's Day"],
      [5, 25, "Memorial Day"],
      [6, 21, "Father's Day"],
      [7, 3, "Independence Day"],
      [7, 4, "Independence Day"],
      [9, 7, "Labor Day"],
      [10, 12, "Columbus Day"],
      [10, 31, "Halloween"],
      [11, 3, "Election Day"],
      [11, 11, "Veterans Day"],
      [11, 26, "Thanksgiving Day"],
      [11, 27, "Black"],
      [12, 24, "Christmas Eve"],
      [12, 25, "Christmas Day"],
      [12, 31, "New Year's Eve"]
    ];
    const China = [
      [1, 1, "New Year's Day"],
      [1, 19, "Special Working Day"],
      [1, 24, "Spring Festival Eve"],
      [1, 25, "Chinese New Year"],
      [1, 26, "Spring Festival Golden Week"],
      [1, 27, "Spring Festival Golden Week"],
      [1, 28, "Spring Festival Golden Week"],
      [1, 29, "Spring Festival Golden Week"],
      [1, 30, "Spring Festival Golden Week"],
      [2, 1, "Special Working Day"],
      [2, 8, "Lantern Festival"],
      [2, 24, "Zhonghe Festival"],
      [3, 8, "International Women's Day"],
      [3, 12, "Arbor Day"],
      [4, 4, "Qing Ming Jie"],
      [4, 5, "Qing Ming Jie"],
      [4, 6, "Qing Ming Jie"],
      [4, 26, "Special Working Day"],
      [5, 1, "Labour Day"],
      [5, 2, "Labour Day"],
      [5, 3, "Labour Day"],
      [5, 4, "Labour Day"],
      [5, 4, "Youth Day"],
      [5, 5, "Labour Day"],
      [5, 9, "Special Working Day"],
      [6, 1, "Children's Day"],
      [6, 25, "Dragon Boat Festival"],
      [6, 26, "Dragon Boat Festival"],
      [6, 27, "Dragon Boat Festival"],
      [6, 28, "Special Working Day"],
      [8, 1, "Army Day"],
      [8, 25, "Chinese Valentine's Day"],
      [9, 2, "Spirit Festival"],
      [9, 10, "Teachers' Day"],
      [9, 27, "Special Working Day"],
      [10, 1, "National Day"],
      [10, 1, "Mid-Autumn Festival"],
      [10, 2, "National Day Golden Week"],
      [10, 3, "National Day Golden Week"],
      [10, 4, "National Day Golden Week"],
      [10, 5, "National Day Golden Week"],
      [10, 6, "National Day Golden Week"],
      [10, 7, "National Day Golden Week"],
      [10, 8, "National Day Golden Week"],
      [10, 10, "Special Working Day"],
      [10, 25, "Double Ninth Festival"],
      [12, 25, "Christmas Day"]
    ];

    let userCountry = USA;
    switch (this.props.getActiveUser().country) {
      case "China":
        userCountry = China;
        break;
      default:
        userCountry = USA;
    }

    let isHoliday = false;
    let holidayName = "";
    for (let i = 0; i < userCountry.length; i++) {
      if (
        this.props.getCurrentDay() === userCountry[i][1] &&
        this.props.getCurrentMonth() === userCountry[i][0]
      ) {
        isHoliday = true;
        holidayName = userCountry[i][2];
      }
    }
    if (isHoliday) {
      return holidayName;
    } else {
      return "";
    }
  };

  message = () => {
    if (this.isBirthday()) {
      return <Birthday />;
    } else if (this.isHoliday() !== "") {
      return <Holiday holiday={this.isHoliday()} />;
    } else {
      return <Quote />;
    }
  };

  render() {
    return <div>{this.message()}</div>;
  }
}

// Property Type Requirement
Message.propTypes = {
  getActiveUser: PropTypes.func.isRequired,
  getCurrentDay: PropTypes.func.isRequired,
  getCurrentMonth: PropTypes.func.isRequired
};

export default Message;

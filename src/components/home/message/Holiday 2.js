import React, { Component } from 'react'
import PropTypes from "prop-types"
export class Holiday extends Component {
    render() {
        return (
            <div className="message">
                {`Happy ${this.props.holiday}!`}
            </div>
        )
    }
}

// Property Type Requirement
Holiday.propTypes = {
    holiday: PropTypes.string.isRequired
  }

export default Holiday

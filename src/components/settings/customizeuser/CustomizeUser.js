import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import bg1 from "../../../images/bg_1_thumb.jpg";
import bg2 from "../../../images/bg_2_thumb.jpg";
import bg3 from "../../../images/bg_3_thumb.jpg";
import bg4 from "../../../images/bg_4_thumb.png";
import bg5 from "../../../images/bg_5_thumb.png";
import bg6 from "../../../images/bg_6_thumb.png";

export class CustomizeUser extends Component {
  state = {
    background: ""
  };

  onMouseEnter = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onMouseLeave = e => {
    this.setState({ [e.target.name]: "" });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.background !== "") {
      this.props.setBackgroundImage(this.state.background);
      this.setState({ background: 0 });
    }
  };

  render() {
    return (
      <div>
        <div className='settings-content'>
          <div className='settings-header'>
            <span>
              <Link
                style={removeTextDecoration}
                className='close-settings'
                to='/settings'
              >
                &times;
              </Link>
            </span>
            <h2>Customize</h2>
          </div>
          <div className='settings-body'>
            <span>
              <h3 id='current-user-label'>Background</h3>
            </span>
            <div className='settings-customize-content'>
              <form onSubmit={this.onSubmit}>
                <input
                  type='image'
                  className='settings-customize-background-thumbnail'
                  src={bg1}
                  alt='Submit'
                  height='100px'
                  width='160px'
                  name='background'
                  value='bg_1.jpg'
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                />
                <input
                  type='image'
                  className='settings-customize-background-thumbnail'
                  src={bg2}
                  alt='Submit'
                  height='100px'
                  width='160px'
                  name='background'
                  value='bg_2.jpg'
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                />
                <input
                  type='image'
                  className='settings-customize-background-thumbnail'
                  src={bg3}
                  alt='Submit'
                  height='100px'
                  width='160px'
                  name='background'
                  value='bg_3.jpg'
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                />
                <input
                  type='image'
                  className='settings-customize-background-thumbnail'
                  src={bg4}
                  alt='Submit'
                  height='100px'
                  width='160px'
                  name='background'
                  value='bg_4.png'
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                />
                <input
                  type='image'
                  className='settings-customize-background-thumbnail'
                  src={bg5}
                  alt='Submit'
                  height='100px'
                  width='160px'
                  name='background'
                  value='bg_5.png'
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                />
                <input
                  type='image'
                  className='settings-customize-background-thumbnail'
                  src={bg6}
                  alt='Submit'
                  height='100px'
                  width='160px'
                  name='background'
                  value='bg_6.png'
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                />
              </form>
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
CustomizeUser.propTypes = {
  setBackgroundImage: PropTypes.func.isRequired
};
export default CustomizeUser;

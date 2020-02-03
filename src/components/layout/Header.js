import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <span>
        <Link
          className='tooltip'
          style={removeTextDecoration}
          id='home-button'
          to='/'
        >
          <div className='icon-home'></div>
          <span className='tooltip-home'>Home</span>
        </Link>
      </span>

      <span>
        <Link
          style={removeTextDecoration}
          className='tooltip'
          id='todos-button'
          to='/todos'
        >
          <div className='icon-todo'></div>
          <span className='tooltip-header-todo'>To Do</span>
        </Link>
      </span>

      <span>
        <Link
          style={removeTextDecoration}
          className='tooltip'
          id='settings-button'
          to='/settings'
        >
          <div className='icon-settings'></div>
          <span className='tooltip-header-settings'>Settings</span>
        </Link>
      </span>
    </div>
  );
}

const removeTextDecoration = {
  textDecoration: "none"
};

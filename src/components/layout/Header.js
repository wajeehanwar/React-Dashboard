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
          ⌂<span className='tooltip-home'>Home</span>
        </Link>
      </span>
      <span>
        <Link
          style={removeTextDecoration}
          className='tooltip'
          id='todos-button'
          to='/todos'
        >
          &#x2611;
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
          &#9881;
          <span className='tooltip-header-settings'>Settings</span>
        </Link>
      </span>
    </div>
  );
}

const removeTextDecoration = {
  textDecoration: "none"
};

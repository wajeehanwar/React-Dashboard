import React, { Component } from "react";

export class Search extends Component {
  onChangeQuery = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Forward search request to Google.
  onSubmitQuery = e => {
    e.preventDefault();
    const searchBar = document.querySelector("#search-bar");
    const searchForward = `http://www.google.com/search?q=${searchBar.value}`;
    window.location = searchForward;
  };

  render() {
    return (
      <div>
        <form id='search-form' onSubmit={this.onSubmitQuery}>
          <div id='google-logo'></div>
          <img
            id='google-logo'
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt='googlelogo'
          />
          <input id='search-bar' type='text' />
          <button
            className='search-button button'
            type='submit'
            onChange={this.onChangeQuery}
          >
            Google Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;

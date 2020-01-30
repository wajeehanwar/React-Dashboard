import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    if (this.state.title !== "") {
      this.props.addTodo(this.state.title);
      this.setState({ title: "" });
    }
  };

  render() {
    return (
      <div>
        <form className='new-todo-form' onSubmit={this.onSubmit}>
          <input
            className='new-todo'
            type='text'
            name='title'
            placeholder='&#x2611;'
            value={this.state.title}
            onChange={this.onChange}
          />

          <input type='submit' className='new-todo-button' value='+' />
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;

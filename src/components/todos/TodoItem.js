import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  todoTextStyle = () => {
    if (this.props.todo.completed) {
      return "todo-incomplete";
    } else {
      return "todo-complete";
    }
  };

  todoButtonStyle = () => {
    if (this.props.todo.completed) {
      return "todo-incomplete-button";
    } else {
      return "todo-complete-button";
    }
  };

  render() {
    return (
      <div>
        <div className={"todo-item"}>
          <span className='todo-buttons'>
            <input
              type='button'
              className={this.todoButtonStyle()}
              value='✔'
              onClick={this.props.todoCompleted.bind(this, this.props.todo.id)}
            />
          </span>
          <span className={`todo-text ${this.todoTextStyle()}`}>
            {this.props.todo.title}
          </span>
          <span className='todo-buttons'>
            <button
              type='button'
              className='todo-remove-button'
              onClick={this.props.removeTodo.bind(this, this.props.todo.id)}
            >
              &#10008;
            </button>
          </span>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todoCompleted: PropTypes.func.isRequired
};

export default TodoItem;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import OutsideAlerter from "../OutsideAlerter";

export class Todos extends Component {
  listTodos = () => {
    console.log(this.props.activeUser().todos);

    return this.props
      .activeUser()
      .todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={this.props.removeTodo}
          todoCompleted={this.props.todoCompleted}
        />
      ));
  };

  render() {
    return (
      <div>
        <OutsideAlerter>
          <div className='todos-content'>
            <div className='todos-header'>
              <span>
                <Link
                  style={removeTextDecoration}
                  className='close-todos'
                  to='/'
                >
                  &times;
                </Link>
              </span>
              <h2>To Do</h2>
            </div>

            <div className='settings-body'>
              <AddTodo addTodo={this.props.addTodo} />
            </div>
            <div className='settings-body'>{this.listTodos()}</div>
          </div>
        </OutsideAlerter>
      </div>
    );
  }
}

const removeTextDecoration = {
  textDecoration: "none"
};

// Property Type Requirement
Todos.propTypes = {
  activeUser: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todoCompleted: PropTypes.func.isRequired
};

export default Todos;

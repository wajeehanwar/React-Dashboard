import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Settings from "./components/settings/Settings";
import Home from "./components/home/Home";
import Todos from "./components/todos/Todos";

const backgroundImages = require.context("./images", true);

export class App extends Component {
  state = {
    users: [
      {
        id: "0",
        firstName: "",
        lastName: "",
        dobDay: 0,
        dobMonth: 0,
        country: "USA",
        todos: [],
        background: "bg_2.jpg",
        active: true
      }
    ]
  };

  componentDidMount = () => {
    // Set page title
    document.title = "Dashboard";

    // Get previously stored state
    if (localStorage.getItem("users") !== null) {
      this.setState({ users: JSON.parse(localStorage.getItem("users")) });
    }

    // Set searchbar as focus point
    document.getElementById("search-bar").focus();
  };

  //
  // Settings functions
  //

  getActiveUser = () => {
    return this.state.users.filter(user => {
      return user.active;
    })[0];
  };

  deactivateActiveUser = () => {
    this.setState({
      users: this.state.users.map(user => {
        if (user.active) {
          user.active = false;
        }
        return user;
      })
    });
  };

  activateUser = id => {
    console.log("activate user method");
    this.deactivateActiveUser();
    this.setState({
      users: this.state.users.map(user => {
        if (user.id === id) {
          user.active = !user.active;
        }
        return user;
      })
    });

    // Set activated user background
    this.refreshBackgroundImage();
  };

  deleteUser = id => {
    this.setState({
      users: this.state.users.filter(user => {
        return user.id !== id;
      })
    });
  };

  addNewUser = (firstName, lastName, dobDay, dobMonth, country) => {
    // Create new user object.
    const uniqueId = `${firstName}_${dobMonth}_${lastName}_${dobDay}_${new Date().getTime()}`;
    const newUser = {
      id: uniqueId,
      firstName: firstName,
      lastName: lastName,
      dobDay: dobDay,
      dobMonth: dobMonth,
      country: country,
      todos: [],
      background: "bg_1.jpg",
      active: true
    };

    this.deactivateActiveUser();
    this.setState({ users: [...this.state.users, newUser] });
  };

  resetAllUsers = () => {
    localStorage.clear();
    window.location.pathname = "/";
  };

  setBackgroundImage = background => {
    document.body.style.backgroundImage = `url(${backgroundImages(
      `./${background}`
    )})`;

    this.setState({
      users: this.state.users.map(user => {
        if (user.active) {
          user.background = background;
        }
        return user;
      })
    });
  };

  refreshBackgroundImage = () => {
    // Set activated user background
    document.body.style.backgroundImage = `url(${backgroundImages(
      `./${this.getActiveUser().background}`
    )})`;
  };

  //
  // Todo Functions
  //

  addTodo = title => {
    const uniqueId = `${title}_${new Date().getTime()}`;
    const newTodo = {
      id: uniqueId,
      title: title,
      completed: false
    };

    this.setState({
      users: this.state.users.map(user => {
        if (user.id === this.getActiveUser().id) {
          user.todos = [...user.todos, newTodo];
        }
        return user;
      })
    });
  };

  removeTodo = id => {
    this.setState({
      users: this.state.users.map(user => {
        if (user.id === this.getActiveUser().id) {
          user.todos = this.getActiveUser().todos.filter(todo => {
            return todo.id !== id;
          });
        }
        return user;
      })
    });
  };

  todoCompleted = id => {
    this.setState({
      users: this.state.users.map(user => {
        if (user.id === this.getActiveUser().id) {
          user.todos = this.getActiveUser().todos.map(todo => {
            if (todo.id === id) {
              todo.completed = !todo.completed;
            }
            return todo;
          });
        }
        return user;
      })
    });
  };

  //
  // Home Functions
  //

  getCurrentHour = () => {
    return new Date().getHours();
  };

  getCurrentDay = () => {
    return new Date().getDate();
  };

  getCurrentMonth = () => {
    return new Date().getMonth() + 1;
  };

  componentDidUpdate = () => {
    localStorage.setItem("users", JSON.stringify(this.state.users));
  };
  render() {
    this.refreshBackgroundImage();
    return (
      <div className='App'>
        <div id='overlay'></div>
        <BrowserRouter>
          <div className='container'>
            <Header />
            <Switch>
              <Route exact path='/'>
                <div>
                  <Home
                    getActiveUser={this.getActiveUser}
                    getCurrentHour={this.getCurrentHour}
                    getCurrentDay={this.getCurrentDay}
                    getCurrentMonth={this.getCurrentMonth}
                  />
                </div>
              </Route>
              {/* Router */}
              <Route path='/settings'>
                <div>
                  <Settings
                    users={this.state.users}
                    activeUser={this.getActiveUser}
                    addNewUser={this.addNewUser}
                    activateUser={this.activateUser}
                    deleteUser={this.deleteUser}
                    resetAllUsers={this.resetAllUsers}
                    setBackgroundImage={this.setBackgroundImage}
                  />
                </div>
              </Route>
              {/* Router */}
              <Route>
                <div>
                  <Todos
                    activeUser={this.getActiveUser}
                    addTodo={this.addTodo}
                    removeTodo={this.removeTodo}
                    todoCompleted={this.todoCompleted}
                  />
                </div>
              </Route>
              <Redirect exact from='/*' to='/' />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import TodoList from './TodoList';
import './TodoApp.css';


class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = () => {
    if (this.state.newTodo.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: this.state.newTodo,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      newTodo: '',
    });
  };

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            placeholder="Add a new todo"
            value={this.state.newTodo}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default TodoApp;

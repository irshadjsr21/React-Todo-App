import React, { Component } from "react";
import Todo from "./todo";
import AddTodo from "./addTodo";
import SearchBox from "./searchBox";

export default class TodoList extends Component {
  state = {
    todos: [],
    query: ""
  };

  handleSubmit = title => {
    const todo = {
      id: Date.now().toString(),
      title: title,
      isDone: false
    };
    const todos = [...this.state.todos];
    todos.push(todo);
    this.setState({ todos });
  };

  handleDelete = todo => {
    const index = this.state.todos.indexOf(todo);
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };

  handleDone = todo => {
    const index = this.state.todos.indexOf(todo);
    const todos = [...this.state.todos];
    todos[index].isDone = !todos[index].isDone;
    this.setState({ todos });
  };

  handleSearch = event => {
    this.setState({ query: event.target.value });
  };

  sortTodos = todos => {
    todos.sort((a, b) =>
      a.isDone && !b.isDone ? 1 : !a.isDone && b.isDone ? -1 : 0
    );
    return todos;
  };

  filterTodos = (todos, query) => {
    if (query) {
      todos = todos.filter(todo => todo.title.startsWith(query));
    }
    return todos;
  };

  getTodos = () => {
    let { todos, query } = this.state;
    todos = this.sortTodos(todos);
    todos = this.filterTodos(todos, query);
    return todos;
  };

  render() {
    const todos = this.getTodos();
    return (
      <div className="container mt-4">
        <h1>Your Todos</h1>
        <AddTodo onSubmit={this.handleSubmit} />
        <SearchBox placeholder="Search Todo" onSearch={this.handleSearch} />
        <div className="m-4">
          {todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={this.handleDelete}
              onDone={this.handleDone}
            />
          ))}
        </div>
      </div>
    );
  }
}

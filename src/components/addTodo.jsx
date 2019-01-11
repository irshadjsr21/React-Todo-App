import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    input: ""
  };

  onChange = event => {
    this.setState({ input: event.target.value });
  };

  doSubmit = event => {
    event.preventDefault();
    this.setState({ input: "" });
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <form onSubmit={this.doSubmit} className="form-inline">
        <input
          type="text"
          name="todo"
          id="todo"
          onChange={this.onChange}
          value={this.state.input}
          className="form-control mr-2"
        />
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    );
  }
}

export default AddTodo;

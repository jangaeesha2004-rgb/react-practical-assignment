import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      todos: ["Learn React", "Complete Assignment"],
    };
  }

  handleChange = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  addTodo = () => {
    if (this.state.task.trim() === "") {
      return;
    }

    this.setState({
      todos: [...this.state.todos, this.state.task],
      task: "",
    });
  };

  deleteTodo = (index) => {
    const updatedTodos = this.state.todos.filter(
      (todo, todoIndex) => todoIndex !== index
    );

    this.setState({
      todos: updatedTodos,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
          placeholder="Enter a task"
        />

        <button onClick={this.addTodo}>Add</button>

        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.deleteTodo(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
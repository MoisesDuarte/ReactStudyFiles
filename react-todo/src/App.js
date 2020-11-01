import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'todo1' },
      { id: 2, content: 'todo2' },
    ]
  }

  addTodo = (newTodo) => {
    newTodo.id = Math.random();
    let todos = [...this.state.todos, newTodo];
    this.setState({
      todos
    });
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    }) 
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
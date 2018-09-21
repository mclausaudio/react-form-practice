import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: '',
      todos: []
    }
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.inputText];
    this.setState({todos, inputText: ''});  
  }
  
  render() {
    const todoList = this.state.todos.map((todo, i)=>{
      return (
        <p>{i+1}. {todo}</p>   
      )
    })
    return (
      <div className="App">
        <h2>A Simple Todo List</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="inputText"
            value={this.state.inputText}
            onChange={(e) => {
              this.setState({inputText: e.target.value})
            }}
          />
          <button type="submit">Add</button>
        </form>
        {todoList}
      </div>
    );
  }
}

export default App;

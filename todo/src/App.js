import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './actions';
import ToDoList from './components/ToDoList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ToDoForm />
        {this.props.todos.map((e, i) => {
          console.log(e.completed)
          return (
            <div key={e.id} className="element">
              <p className="list-text" style={e.completed ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{e.value} </p>
              <button className="btn" onClick={() => {
                this.props.deleteTodo(e.id)
              }}>Delete</button>
              <button className="btn" onClick={() => {
                this.props.completeTodo(e.id)
              }}>Complete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: todos
  };
};

export default connect(mapStateToProps, { addTodo, deleteTodo, completeTodo })(App);

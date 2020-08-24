import React, { Component } from 'react';
import TodoList from '../todo-list'
import AppHeader from '../app-header'
import SeachPanel from '../search-panel'
import './app.css';
import ItemStatusFilter from '../item-status-filter';

export default class App extends Component {
  state = {
    todoData: [
      { id: 1, label: 'drink cofee', important: false },
      {id: 2, label:  'build awesome app', important: true },
      { id: 3, label:  'have a lunch', important: false },
    ]
  }
  deleteItem = (id) => {
    this.setState( ({todoData}) => {
      const index = todoData.findIndex((el) => el.id === id)
      const newArr = [
        ...todoData.slice(0, index), 
        ...todoData.slice(index + 1)];
      return {
        todoData: newArr
      }
    })
  }
render() {
  return (
    <div className="App">
      <AppHeader toDo={1} done={3}/>
      <div className="top-panel d-flex">
        <SeachPanel/>
        <ItemStatusFilter/>
      </div>
        <h1>Hi</h1>
        <TodoList todos={this.state.todoData}
        onDeleted={this.deleteItem}/>
    </div>
  );
}
}

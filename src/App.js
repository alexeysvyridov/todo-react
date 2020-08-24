import React, { Component } from 'react';
import TodoList from './components/todo-list'
import AppHeader from './components/app-header'
import SeachPanel from './components/search-panel'
import './App.css';
import ItemStatusFilter from './components/item-status-filter';

export default class App extends Component  {
  state = {
    todoData: [
      { id: 1, label: 'drink cofee', important: false },
      {id: 2, label:  'build awesome app', important: true },
      { id: 3, label:  'have a lunch', important: false },
    ]
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
        <TodoList todos={this.state.todoData}/>
    </div>
  );
}
}

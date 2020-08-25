import React, { Component } from 'react';
import TodoList from '../todo-list'
import AppHeader from '../app-header'
import SeachPanel from '../search-panel'
import './app.css';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';

export default class App extends Component {
  maxId = 100;
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
  addItem = (text) => {

    const newItem = {
      id: this.maxId++,
      label: text,
      important: false
    }

    this.setState(({todoData})=> {
      const newArr = [...todoData, newItem]
      return {
        todoData: newArr
      }
    })
  }

  onToggleImportant = (id) => {
    console.log('toggle important', id)
  }
  onToggleDone = (id) => {
    console.log('toggle Done', id)
  }
  render() {
    return (
      <div className="App">
        <AppHeader toDo={1} done={3}
        />
        <div className="top-panel d-flex">
          <SeachPanel/>
          <ItemStatusFilter/>
        </div>
          <h1>Hi</h1>
          <TodoList todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
          />
          <ItemAddForm
          onItemAdded={this.addItem} />
      </div>
    );
  }
};

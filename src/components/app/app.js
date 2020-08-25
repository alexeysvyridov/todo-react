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
      this.createTodoItem("Drink coffee"),
      this.createTodoItem("build awesome app"),
      this.createTodoItem("have a lunch"),
    ]
  }
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
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

    const newItem = this.createTodoItem(text)

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
    this.setState(({todoData}) => {
      const index = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[index];
      const newItem = {...oldItem, done: !oldItem.done}
      const newArr = [
        ...todoData.slice(0, index), 
        newItem,
        ...todoData.slice(index + 1)];
        return {
          todoData: newArr
        }
    })

  }
  render() {
    const { todoData } = this.state
    const doneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.length - doneCount;
    return (
      <div className="App">
        <AppHeader toDo={todoCount} done={doneCount}
        />
        <div className="top-panel d-flex">
          <SeachPanel/>
          <ItemStatusFilter/>
        </div>
          <h1>Hi</h1>
          <TodoList todos={todoData}
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

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
    console.log(text);
    const newItem = this.createTodoItem(text)

    this.setState(({todoData})=> {
      const newArr = [...todoData, newItem]
      return {
        todoData: newArr
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      }
    })
  }
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      }
    })
  }
  toggleProperty = (arr, id, propertyName) => {
    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];
    const newItem = {...oldItem, [propertyName]: !oldItem[propertyName]}
    return [
        ...arr.slice(0, index),
        newItem,
        ...arr.slice(index + 1)
      ];
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

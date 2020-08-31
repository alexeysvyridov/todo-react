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
    ],
    query: '',
    filter: 'all'
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

  onSearchChange = (query) => {
    this.setState({query})
  }

  search = (todoData, query) => {
      const filter = todoData.filter(todo => todo.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
      if(filter.length === 0) {
        return todoData;
      }
      return filter
  }
    filtersTodo = (items, filter) => {
      switch(filter) {
        case 'all':
          return items
        case 'active':
          return items.filter(item=> !item.done) 
        case 'done':
          return items.filter(item => item.done) 
        default: 
          return items;
      }
    }
    onFilterChange = (filter) => {
      this.setState({filter})
    }
  render() {
    const { todoData, query, filter } = this.state
    const doneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.length - doneCount;
    const filteredItems = this.filtersTodo( this.search(todoData, query), filter)
    return (
      <div className="App">
        <AppHeader toDo={todoCount} done={doneCount}
        />
        <div className="top-panel d-flex">
          <SeachPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter 
          onFilterChange={this.onFilterChange}
          filter={filter}/>
        </div>
          <h1>Hi</h1>
          <TodoList todos={filteredItems}
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

import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  state = {
    done:false,
    important: false
  }

  onLabelClick = () => {
    this.setState(({done})=> ({
      done: !done
    }))
  }
  onMarkImportant = () => {
    this.setState(({important}) => ({
      important: !important
    }))
  }
  render() {
    let { label } = this.props;
    let className = 'todo-list-item';
    
    const { done, important } = this.state;

    if(done) {
      className += ' done';
    }
    if(important) {
      className += ' important';
    }
    return (
      <span className={className}>
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick}
          label={label}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
  }

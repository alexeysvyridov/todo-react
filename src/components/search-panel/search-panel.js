import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    query: ''
  }
  onSearchChange = (e) => {
    let query = e.target.value;
    this.setState({query});
    this.props.onSearchChange(query)
  }
  render() {
    return (
      <input type="text" onChange={this.onSearchChange} 
                className="form-control search-input"
                placeholder="type to search"
                value={this.state.query}
      />
    );
  }
};

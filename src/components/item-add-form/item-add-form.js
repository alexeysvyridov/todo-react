import React, { Component } from 'react'
import './item-add-form.css'
export default class ItemAddForm extends Component {
    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        console.log(e);
        e.preventDefault()
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}
            className="item-add-form d-flex">
                <input type="text" className="form-control"
                onChange={this.onLabelChange}
                placeholder="what's need to be doom"
                value={this.state.label}/>
                <button
                 type="submit"
                 className="btn btn-primary"
                 >Add Item</button>
            </form>
        )
    }
}
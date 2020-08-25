import React, { Component } from 'react'
import './item-add-form.css'
export default class ItemAddForm extends Component {
    render() {
        return (
            <div className="item-add-form">
                <button
                 type="button"
                 className="btn btn-primary"
                 onClick={()=> {this.props.onItemAdded("label")}}
                 >Add Item</button>
            </div>
        )
    }
}
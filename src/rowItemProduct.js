import React, { Component } from 'react'

export default class RowItemProduct extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const product = this.props.product;
        let styleStocked = product.stocked ? { color: "black" } : { color: "red", textDecoration: "line-through" };
        let styleDisplay = product.stocked ? { display: "none" } : { display: "block" };
        return (
            <tr className="table-active"  >
                <td style={styleStocked}>{product.name}</td>
                <td>${product.price}</td>
                <td>
                    <button className="btn btn-danger" style={styleDisplay} onClick={this.deleteItem}>Remove</button>
                </td>
            </tr>
        );
    }

    deleteItem = () => {
        this.props.onDeleteItem(this.props.product);
    }
}
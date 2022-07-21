import React, { Component } from 'react'
import RowItemCategory from './rowItemCategory'
import RowItemProduct from './rowItemProduct'


export default class ProductsTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const justSort = this.props.justSort;
        const categoryDisplay = this.props.categoryDisplay;

        const rows = [];
        let lastCategory = null;
        let products = this.props.products;

        if(categoryDisplay === 'All'){
            products = this.props.products;
        }
        else{
            products = this.props.products.filter(product => product.category === categoryDisplay);
        }

        if(this.props.sortByInput === 'name'){
            products.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
        }
        else if(this.props.sortByInput === 'price'){
            products.sort((a, b) => a.price > b.price ? 1 : -1);
        }
        else{
            products.sort((a,b) => a.category > b.category ? 1 : -1);
        }
        
        products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory && !justSort) {
                rows.push(
                    <RowItemCategory
                        category={product.category}
                        key={product.category} />
                );
            }
            rows.push(
                <RowItemProduct
                    product={product}
                    onDeleteItem={this.onDeleteItem}
                    key={product.name}
                />
            );
            lastCategory = product.category;
        });

        return (
            <table className="table" style={{ border: "1px solid green" }}>
                <thead>
                    <tr class="table-dark" >
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }

    //Callback From RowItemProduct
    onDeleteItem = (product) => {
        this.props.onDeleteItem(product);
    }
}
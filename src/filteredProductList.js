 import React, { Component } from 'react'
import "./bootstrap.min.css"
import ProductsTable from './productsTable'
import SearchBar from './searchBar'


let productsData = [
    { category: "Sporting Goods", price: 9.99, stocked: true, name: "Baseball", id: 1 },
    { category: "Electronics", price: 99.99, stocked: true, name: "iPod Touch", id: 2 },
    { category: "Sporting Goods", price: 49.99, stocked: true, name: "Football", id: 3 },
    { category: "Electronics", price: 399.99, stocked: false, name: "iPhone 5", id: 4 },
    { category: "Sporting Goods", price: 29.99, stocked: false, name: "Basketball", id: 5 },
    { category: "Electronics", price: 199.99, stocked: true, name: "Nexus 7", id: 6 }
];



export default class FilteredProductList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filterText: '',
            inStockOnly: false,
            products: productsData,
            sortBy: '',
            justSort: false,
            categoryDisplay: 'All',
        }
    }

    render() {
        return (
            <div style={{ border: "1px solid yellow", padding: "20px" }}>
                <SearchBar onFilterChanged={this.filterChanged}
                    onInStockChanged={this.inStockChanged}
                    onSortByChanged={this.sortByChanged}
                    onDisplayByCategory={this.onDisplayByCategory}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                ></SearchBar>
                <ProductsTable
                    products={this.state.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} 
                    sortByInput={this.state.sortBy}
                    justSort={this.state.justSort}
                    categoryDisplay={this.state.categoryDisplay}
                    onDeleteItem={this.onDeleteItem}/>
            </div>
        )
    }

    //Callback From SearchBar
    filterChanged = (filterTextInput) => {
        this.setState({ filterText: filterTextInput });
    }

    //Callback From SearchBar
    inStockChanged = (inStockInput) => {
        this.setState({ inStockOnly: inStockInput });
    }

    //Callback From SearchBar
    sortByChanged = (sortByInput) => {
        if(sortByInput === 'null'){
            this.setState({ sortBy: sortByInput, justSort: false });
        }
        else{
            this.setState({ sortBy: sortByInput,justSort: true });
        }
    }

    onDisplayByCategory = (categoryDisplay) => {
        this.setState({ categoryDisplay: categoryDisplay });
    }

    onDeleteItem = (product) => {
        this.setState({ products: this.state.products.filter(p => p.id !== product.id) });
    }
}
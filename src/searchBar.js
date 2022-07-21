import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form style={{ border: "1px solid blue", padding: "10px" }}>

                <input className="form-control" placeholder="search..."
                    type="text"
                    style={{ width: "100%" }}
                    value={this.props.filterText}
                    onChange={this.handleFilterChanged}>
                </input>


                <table style={{ width: "100%" }}>
                    <tr>
                        <td style={{ width: "auto" }}>

                            <input style={{paddingBottom: "10px", width: "20px", top: "-" }} onChange={this.handleInStockChanged}
                                type="checkbox"
                                checked={this.props.inStockOnly} />
                            <label style={{padding: "10px"}}>Is In Stock</label>
                        </td>
                        <td style={{ width: "auto" }}>
                            <label style={{padding: "10px"}} for="sortBy">Sort By:</label>
                            <select style={{width: "100px"}} 
                                    name='sortBy' 
                                    id='sortBy' 
                                    onChange={this.handleSortByChanged}>
                                <option value='null'></option>
                                <option value='name'>Name</option>
                                <option value='price'>Price</option>
                            </select>
                        </td>
                        <td style={{ width: "auto" }}>
                        <label style={{padding: "10px"}} for="category">Display Category:</label>
                            <select style={{width: "100px"}} 
                                    name='categoryDisplay' 
                                    id='category' 
                                    onChange={this.handleDisplayByCategory}>
                                <option value='All'>All</option>
                                <option value='Sporting Goods'>Sporting Goods</option>
                                <option value='Electronics'>Electronics</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </form>
        )
    }

    handleFilterChanged = (e) => {
        let filterValue = e.target.value;
        this.props.onFilterChanged(filterValue);

    }

    handleInStockChanged = (e) => {
        let isChecked = e.target.checked;
        this.props.onInStockChanged(isChecked);
    }

    handleSortByChanged = (e) => {
        let sortBy = e.target.value;
        this.props.onSortByChanged(sortBy);
    }

    handleDisplayByCategory = (e) => {
        let category = e.target.value;
        this.props.onDisplayByCategory(category);
    }

}
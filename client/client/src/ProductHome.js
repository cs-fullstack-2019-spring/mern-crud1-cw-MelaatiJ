import React, { Component } from 'react';
import AddProduct from "./AddProduct";
import ProductList from "./ProductList"
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

class ProductHome extends Component{
    // constructo to set state of data //
    constructor(props)
    {
        super(props);
        this.state ={
            data:[],
        };
        this.loadProductData();
    }
        // fetching data from router list all //
    loadProductData =()=> {
        fetch("/list")
            .then(data=>data.json())
            .then(response=>this.setState({data:response}));
    };

    render(){
        return(
            <div>
                <Router>
                    {/* to add product */}
                    <Link to="/add">Add Product </Link>
                    <ProductList array={this.state.data}/>
                    <Route path="/add" component={AddProduct} />
                </Router>
            </div>
    );
    }
}

export default ProductHome;
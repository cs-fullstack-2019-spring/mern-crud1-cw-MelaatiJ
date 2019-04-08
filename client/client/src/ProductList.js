import React, { Component } from 'react';

class ProductList extends Component{

    render(){
        // itterating through each and printing each product out //
        const mappedArray = this.props.array.map(
            (eachElement) => {
                return(<div>
                    <p>{`Product ID: ${eachElement.productId}  Price $: ${eachElement.price}  Quantity #:${eachElement.quantity}`}</p>
                    <hr/>
                </div>)
            }
        )
        return(
            <div>
                {mappedArray}
            </div>
    );
    }
}

export default ProductList;
import React, { Component } from 'react';

class AddProduct extends Component{
 // submit dataa function //
    submitProductData=(e)=> {
        e.preventDefault();
        fetch('/add',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: e.target.productId.value,
                    price: e.target.price.value,
                    quantity:e.target.quantity.value,
                }),
            }
        );
    };
    render(){
        return(
            <div>
                {/*Form to add product */}
                <form method="POST" onSubmit={this.submitProductData}>
                    <label htmlFor="productId">Product ID:</label>
                    <input type="text" id="productId" name="productId"/>

                    <label htmlFor="price">Product Price:</label>
                    <input type="text" id="price" name="price"/>

                    <label htmlFor="quantity">Product Quantity:</label>
                    <input type="text" id="quantity" name="quantity"/>


                    <button>Submit</button>
                </form>
            </div>
    );
    }
}

export default AddProduct;
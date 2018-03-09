import * as React from "react";
import BaseView from "../Base/BaseView";
import CartModel from "./CartModel";
import ProductView from "../Product/ProductView";

export default class extends BaseView<CartModel, {}> {
    render() { return (
        <div>
            <h3>Your Cart</h3>
            {this.model.isEmpty() ? <em>Please add some products to cart.</em> : this.allProducts}
            <p>{`Total: $${this.model.total}`}</p>
            <button 
                disabled={this.model.isEmpty()}
                onClick={() => this.model.checkout()}
            >
                Checkout
            </button>
        </div>
    ); }

    private get allProducts() {
        return this.model.allProducts.map(product => (
            <div key={product.id}> <ProductView model={product} count={this.model.getCount(product)}/> </div>
        ))
    }
}
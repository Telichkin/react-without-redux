import * as React from "react";
import BaseView from "../Base/BaseView";
import ShopModel from "./ShopModel";
import ProductView from "../Product/ProductView";
import ProductModel from "../Product/ProductModel";

export default class extends BaseView <ShopModel, {}> {
    render() { return (
        <div>
            {this.model.allProducts.map(product => (
                <div style={{ marginBottom: "25px"}} key={product.id}>
                    <ProductView model={product} count={this.model.getCount(product)}/>
                    {this.addToCartButton(product)}
                </div>
            ))}
        </div>
    ); }

    private addToCartButton(product: ProductModel) { return (
        <button 
            disabled={this.model.isProductSoldOut(product)}
            onClick={() => this.model.putToCart(product)}
        >
            {this.model.isProductSoldOut(product) ? "Sold out" : "Add to cart"}
        </button>
    ); }
}
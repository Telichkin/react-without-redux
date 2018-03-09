import * as React from "react";
import * as ReactDOM from "react-dom";
import ShopView from "./Shop/ShopView";
import CartModel from "./Cart/CartModel";
import ShopModel from "./Shop/ShopModel";
import CartView from "./Cart/CartView";
import ProductModel from "./Product/ProductModel";

const cart = new CartModel();
const shop = new ShopModel(cart);
shop.add(new ProductModel(0, "iPad 4 Mini", 500.01), 2);
shop.add(new ProductModel(1, "H&M T-Shirt White", 10.99), 10);
shop.add(new ProductModel(2, "Charli XCX - Sucker CD", 19.99), 5);

ReactDOM.render(
    <div>
        <h2>Shopping Cart Example</h2>
        <hr/>
        <ShopView model={shop}/>
        <hr/>
        <CartView model={cart}/>
    </div>,
    document.getElementById("root")
)

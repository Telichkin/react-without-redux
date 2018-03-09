import CartModel from "../Cart/CartModel";
import AbstractProductContainer from "../AbstractProductContainer";
import ProductModel from "../Product/ProductModel";

export default class extends AbstractProductContainer {
    constructor(private cart: CartModel) { super(); }

    putToCart(product: ProductModel) {
        if (this.isProductSoldOut(product)) { return; }
        this.cart.add(product, 1);
        this.productsCount[product.id] -= 1;
        this.updateViews();
    }

    isProductSoldOut(product: ProductModel) { return this.getCount(product) === 0; }
}
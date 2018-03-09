import ProductModel from "../Product/ProductModel";
import AbstractProductContainer from "../AbstractProductContainer";

export default class extends AbstractProductContainer {
    private totalPrice: number = 0;
    
    add(product: ProductModel, count: number) {
        super.add(product, count);
        this.totalPrice += product.price;
        this.updateViews();
    }

    get total() { return this.totalPrice.toFixed(2); }

    isEmpty() { return this.totalPrice === 0; }

    checkout() {
        this.removeAllProducts();
        this.totalPrice = 0;
        this.updateViews();
    }
}
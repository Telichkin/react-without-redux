import BaseModel from "./Base/BaseModel";
import ProductModel from "./Product/ProductModel";

export default abstract class extends BaseModel {
    protected productsCount: { [productId: number]: number } = {};
    protected products: ProductModel[] = [];

    add(product: ProductModel, count: number) {
        const alreadyExists = this.products.indexOf(product) !== -1
        if (!alreadyExists) { 
            this.products.push(product);
            this.productsCount[product.id] = 0;     
        }
        this.productsCount[product.id] += count;
    }

    protected removeAllProducts() {
        this.products = [];
        this.productsCount = {};
    }

    get allProducts(): ProductModel[] { return this.products; }

    getCount(product: ProductModel) { return this.productsCount[product.id] || 0 }
}
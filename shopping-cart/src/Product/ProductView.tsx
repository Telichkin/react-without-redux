import * as React from "react";
import BaseView from "../Base/BaseView";
import ProductModel from "./ProductModel";

export default class extends BaseView<ProductModel, {count: number}> {
    render() { return (
        <div>
            {this.model.title} - &#36;{this.model.price}{this.props.count ? ` x ${this.props.count}` : null}
        </div>
    ); }
}
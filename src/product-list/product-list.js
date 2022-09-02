import React from "react";
import "./product-list.css";
import ProductItems from "../product-items/product-items";
import ProductMenu from "../product-menu/product-menu";

const ProductList = (props) => {
    const {productData} = props;
    const elements = productData.map((item) => {
        return (
                <ProductItems {...item}/>
        )
    })
    return (
            <div className="main">
                <ProductMenu/>
            {elements}
            </div>
    )

}
export default ProductList;
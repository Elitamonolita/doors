import React from "react";
import "./product-list.css";
import ProductItems from "../product-items/product-items";

const ProductList = (props) => {
    const {productData} = props;
    const elements = productData.map((item) => {
        return (
                <ProductItems {...item}/>
        )
    })
    return (
<div className="header">
            {elements}
</div>
    )

}
export default ProductList;
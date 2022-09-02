import React from "react";
import "./product-items.css";


const ProductItems = (props) => {
    const {name, comments, id} = props;
    return (
            <div className="product-wrapper">
                {name}
            </div>
    )
}
export default ProductItems;

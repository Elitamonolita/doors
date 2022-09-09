import React from "react";
import "./product-items.css";


const ProductItems = (props) => {
    const {name, comments, id} = props;
    return (
                            <div className="block-f">
                                <div className="product-name">{name}</div>
                            </div>
    )
}
export default ProductItems;

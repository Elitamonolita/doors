import React from "react";
import "./product-items.css";
import imh from "../img/door-test.png"

const ProductItems = (props) => {
    const {name, material, id, sum} = props;
    return (
                            <div className="block-f">
                                <div className="img-block">
                                <img width="100%" height="100%" src={imh}/>
                            </div>
                                <div className="product-name">
                                        {name}
                                </div>
                                <br/>
                                <div className="product-material">
                                Материял: {material}
                                </div>
                                <div className="sum">{sum} руб</div>
                            </div>
    )
}
export default ProductItems;

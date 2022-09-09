import React from "react";
import "./main-page.css";
import ProductDetails from "../product-details/product-details";


const MainPage = (props) => {
    return (
                <ProductDetails swapiService={props.swapiService}/>
    )
}
export default MainPage;
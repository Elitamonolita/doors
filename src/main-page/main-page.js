import React from "react";
import "./main-page.css";
import Menu from "../menu/menu";
import TextWindow from "../text-window/text-window";
import ProductMenu from "../product-menu/product-menu";
import ProductDetails from "../product-details/product-details";


const MainPage = (props) => {
    return (

        <div className="MainBody">
                <ProductDetails swapiService={props.swapiService}/>
        </div>
    )
}
export default MainPage;
import React from "react";
import "./menu.css"
import img from "../img/phone.png";

const Menu = ()=> {
    return (
        <div>
            <div className="head-block">
                <h3 className="name">Двери Окна Оптим</h3>
                <div className="name-rf">"Двериокна.рф"</div>
                <img src={img} className="logo-number"></img>
            </div>
        </div>
    )
}
export default Menu
import React from "react";
import "./menu.css"
import img from "../img/phone.png";

const Menu = ()=> {
    return (
        <div>
            <div className="head-block">
                <div>
                <h3 className="name">Двери Окна Оптим</h3>
                <div className="name-rf">"Двериокна.рф"</div>
            </div>
                <div className="second-head-block">
                    <div className="block-number">
                <img src={img}></img>
                    <p className="number">+79120941094421</p>
                </div>
                <button type="button" className="btn btn-primary btn-sm bt1">Цена</button>
                <button type="button" className="btn btn-primary btn-sm bt1">Двери</button>
                <button type="button" className="btn btn-primary btn-sm bt1">Окна</button>
                <button type="button" className="btn btn-primary btn-sm bt1">Услуги</button>
                <button type="button" className="btn btn-primary btn-sm bt1">Сотрудничество</button>
                <button type="button" className="btn btn-primary btn-sm bt1">Товары</button>
                </div>
            </div>

        </div>
    )
}
export default Menu
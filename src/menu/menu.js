import React from "react";
import "./menu.css"
import phone from "../img/phone.png";

const Menu = ()=> {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid menuPadding">
                    <div id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Двери</a>
                            </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Окна</a>
                                </li>
                                    <li className="nav-item">
                                <a className="nav-link" href="#">Остальное</a>
                            </li>
                            <img className="phone" src={phone}/>
                            <div className="phoneNumber">
                                <p>Номер:</p><p className="number">+7853525325</p>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Menu
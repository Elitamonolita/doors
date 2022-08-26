import React from "react";
import "./menu.css"

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
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Menu
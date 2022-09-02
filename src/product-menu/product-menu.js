import React from "react";
import "./product-menu.css";
import ar from "../img/ar.png";
import {Component} from "react";

export default class ProductMenu extends Component {
    state = {
        show: false,
        show2: false,
        show3: false
    };
    menuLabel = () => {
        this.setState( ({show}) => {
            return {
                show: !show,
                show2: false,
                show3: false
            }
        });
    };
    menuLabel2 = () => {
        this.setState( ({show2}) => {
            return {
                show2: !show2,
                show: false,
                show3: false
            }
        });
    };
    menuLabel3 = () => {
        this.setState( ({show3}) => {
            return {
                show3: !show3,
                show2: false,
                show: false
            }
        });
    };
    render() {
        const {show} = this.state;
        const {show2} = this.state;
        const {show3} = this.state;
        let className = 'dropdown-content menu-block';
        if (show) {
            className += ' show';
        }
        let className2 = 'dropdown-content menu-block';
        if (show2) {
            className2 += ' show';
        }
        let className3 = 'dropdown-content menu-block';
        if (show3) {
            className3 += ' show';
        }
        return (
            <div>
                <div className="product-block-menu">
                    <div onClick={this.menuLabel} className="product mouse-indicator"><img className="ar" src={ar}></img>Окна</div>
                    <div onClick={this.menuLabel2} className="product mouse-indicator"><img className="ar" src={ar}></img>Двери входные</div>
                    <div onClick={this.menuLabel3} className="product mouse-indicator"><img className="ar" src={ar}></img>Двери межкомнатные</div>
                </div>
            <div className="dropdown menu-window">
                <div id="myDropdown" className={className} >
                    <a href="plastic">Пластиковые окна и двери в квартиру и дома</a>
                    <a href="aluminum">Алюминевые остекление</a>
                    <a href="individual">Индивидуальные решения</a>
                </div>
                <div id="myDropdown" className={className2}>
                    <a href="input">Входная группа дверей квартиры и офисы</a>
                    <a href="doors">Двери "Терморазрыв".</a>
                    <a href="techno">Противопожарные и технические двери</a>
                </div>
                <div id="myDropdown" className={className3}>
                    <a href="home">Царговые двери</a>
                    <a href="about">Шпоннированые двери</a>
                    <a href="mass">Массив</a>
                </div>
            </div>
        </div>

        )
    }
}

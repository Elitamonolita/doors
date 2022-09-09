import './App.css';
import MainPage from "./main-page/main-page";
import Menu from "./menu/menu";
import React, {Component} from "react";
import TextWindow from "./text-window/text-window";
import Service from "./services/services"

export default class App extends Component{
    service = new Service()
    render() {

    return (
    <div>
        <Menu/>
        <TextWindow/>
        <MainPage swapiService={this.service}/>
    </div>
  );
}
}


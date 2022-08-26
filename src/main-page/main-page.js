import React from "react";
import "./main-page.css";
import Menu from "../menu/menu";
import MainImg from "./main-img/main-img";
import PageInfo from "./page-info/page-info";

const MainPage = () => {
    return (
        <div className="MainBody">
        <Menu/>
            <MainImg/>
            <PageInfo/>
        </div>
    )
}
export default MainPage;
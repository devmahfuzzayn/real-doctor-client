import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/Home/NavBar/NavBar";

const Main = () => {
    return (
        <div className="main-content max-w-[1920px] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;

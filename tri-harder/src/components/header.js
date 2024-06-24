import React from "react";
import "../styles/header.css"
import NavBar from "./navBar";

const Header = () => {


    return (
        <div className="component-container">
            <div className="header-container">
                <div className="header-logo">
                  <h2>AUG 11</h2>
                </div>
            </div>
            <div className="logo-container">
                <NavBar/>
            </div>
        </div>
    )
}
export default Header
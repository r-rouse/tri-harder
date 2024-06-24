import React from "react";
import "../styles/header.css"
import NavBar from "./navBar";

const Header = () => {


    return (
        <div className="component-container">
            <div className="header-container">
                <div className="header-logo">
                    <h1 className="logo">TRI-HARDER</h1>
                  <video autoPlay loop muted playsinline class="elementor-background-video-hosted elementor-html5-video"  src="https://runlongbeach.com/wp-content/uploads/2022/10/LBM-Horizontal-for-Web.mp4" ></video>
                </div>
            </div>
            <div className="logo-container">
                <NavBar/>
            </div>
        </div>
    )
}
export default Header
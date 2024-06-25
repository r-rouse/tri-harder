import React from "react";
import image from "../assets/IMG_7791.PNG"
import NavBar from "../components/navBar";




const Course = () => {


    return (
        <>
            <div className="logo-container">
                <NavBar />
            </div>
            <img src={image} alt="course map" />
        </>
    )
}

export default Course
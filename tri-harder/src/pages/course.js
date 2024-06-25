import React from "react";
import image from "../assets/course1.png";
import image2 from "../assets/course2.png";
import image3 from "../assets/course3.png";
import image4 from "../assets/course4.png";
import image5 from "../assets/course5.png";
import NavBar from "../components/navBar";
import '../styles/course.css';

const Course = () => {
    return (
        <>
            <div className="logo-container">
                <NavBar />
            </div>
            <div className="full-screen-image">
                <img src={image} alt="course map" />
                <img src={image2} alt="course map" />
                <img src={image3} alt="course map" />
                <img src={image4} alt="course map" />
                <img src={image5} alt="course map" />
            </div>
        </>
    );
}

export default Course;

import React from "react";
import image from "../assets/course1.jpg";
import image2 from "../assets/course2.jpg";
import image3 from "../assets/course3.jpg";
import image4 from "../assets/course4.jpg";
import image5 from "../assets/course5.jpg";
import NavBar from "../components/navBar";
import '../styles/course.css';

const Course = () => {
    return (
        <>
            <div className="logo-container">
                <NavBar />
            </div>
            <div className="full-screen-image">
                <div> Swim 
                    <div className="def"> Leeway to the bridge and back</div>
                </div>
                <img src={image} alt="course map" />
                <div> Bike
                    <div className="def"> To second - to Main - to PCH - hit 12 miles and turn around</div>
                </div>
                <img src={image2} alt="course map" />
                <img src={image3} alt="course map" />
                <img src={image4} alt="course map" />
                <div> Run
                    <div className="def"> Around the peninsula - down the beach path to Junipero - up to Ocean - Ocean back to Leeway</div>
                </div>

                <img src={image5} alt="course map" />
            </div>
        </>
    );
}

export default Course;

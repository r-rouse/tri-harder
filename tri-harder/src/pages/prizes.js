import React from "react"
import '../styles/landing.css'
import '../styles/prize.css'
import NavBar from "../components/navBar"
const Prize = () => {
    return (
        <>
            <div className="logo-container">
                <NavBar />
            </div>
            <div className="prize-container">
                <iframe width="646" height="356" src="https://www.youtube.com/embed/8p9DGPn26S4?autoplay=1&mute=1" title="JoeJosts-Sandwiches.mov" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
            </div>
        </>
    )
}

export default Prize
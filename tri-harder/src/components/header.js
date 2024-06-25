import React, { useEffect, useRef } from "react";
import "../styles/header.css"
import movie from '../assets/TheBoys.mp4'
const Header = () => {

    const videoRef = useRef(null);
    // const video = document.getElementById('myVideo');
    const startLoop = 25; // start loop at 10 seconds
    const endLoop = 35;  // end loop at 20 seconds
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Function to handle the looping logic
        const onTimeUpdate = () => {
            if (video.currentTime > endLoop) {
                video.currentTime = startLoop;
            }
        };

        video.addEventListener('timeupdate', onTimeUpdate);

        // Initialize video at specific start time
        video.currentTime = startLoop;

        return () => {
            video.removeEventListener('timeupdate', onTimeUpdate);
        };
    }, [startLoop, endLoop]);

    return (
        <div className="component-container">
            <div className="header-container">
                <div className="header-logo">
                    <div className="title-container">
                        <h1 className="logo">TRI-HARDER</h1>
                    </div>
                    <div className="register-button">
                        <a class="btn btn-secondary" href="/register">Register</a>
                    </div>
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="elementor-background-video-hosted-elementor-html5-video"
                        src={movie}
                    ></video>

                </div>
            </div>

        </div>
    )
}
export default Header
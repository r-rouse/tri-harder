import React, { useEffect, useRef } from "react";
import "../styles/header.css"
import movie from '../assets/TheBoys.mp4'
const Header = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // Autoplay started
                }).catch(error => {
                    // Autoplay failed
                    console.log('Autoplay failed:', error);
                });
            }
        }
    }, []);
    return (
        <div className="component-container">
            <div className="header-container">
                <div className="header-logo">
                    <div className="title-container">
                        <h1 className="logo">TRI-HARDER</h1>
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
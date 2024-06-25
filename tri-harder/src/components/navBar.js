// NavBar.js
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Countdown from './countdown';
import '../styles/navbar.css'

const NavBar = () => {
    const targetDate = "2024-08-11T06:59:59";
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fwhite-home-icon-png%2Fwhite-home-icon-png-21.jpg&f=1&nofb=1&ipt=6bd7c4330c30e349f263e1e0abf07c4952e273b08f38575d18ad45b560665c71&ipo=images' alt='house' />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <div className='buttons'>
                        <a class="btn btn-secondary" href="/course">Course Info</a>
                        <a class="btn btn-secondary" href="/register">Register</a>
                        <a class="btn btn-secondary" href="/">FAQ</a>
                    </div>
                    <div class='countdown-wrapper'>
                        <Countdown targetDate={targetDate} />
                    </div>
                    <h1 className='date'>AUG 11</h1>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
// NavBar.js
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Countdown from './countdown';


const NavBar = () => {
    const targetDate = "2024-08-11T06:59:59";
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    HOME
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                8====D
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a class="dropdown-item" href="/course">Course Info</a></li>
                                <li><a class="dropdown-item" href="/register">Register</a></li>
                                <li><a class="dropdown-item" href="/">FAQ</a></li>
                            </ul>
                        </li>
                    </ul>
                    <Countdown targetDate={targetDate}/>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
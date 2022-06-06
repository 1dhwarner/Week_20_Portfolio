import React from 'react';

const Nav = () => {
    return (
        <nav class="navbar sticky-top navbar-light">
            <ul id="links">
                <li><a href="#about-me" class="links"> aboutMe </a> | </li>
                <li><a href="#projects" class="links"> portfolio </a> | </li>
                <li><a href="#resume" class="links"> resume </a> | </li>
                <li><a href="#contact-info" class="links"> contactInfo </a></li>
            </ul>
        </nav>
    )
}

export default Nav;
import React from 'react';

const Nav = () => {
    return (
        <nav class="navbar sticky-top navbar-light">
            <ul id="links">
                <li><a href="nav-items/app.html" class="links"> apps </a> | </li>
                <li><a href="nav-items/about.html" class="links"> aboutMe </a> | </li>
                <li><a href="nav-items/contact.html" class="links"> contactInfo </a></li>
            </ul>
        </nav>
    )
}

export default Nav;
import React from 'react';
import profile from './profile.png';

const Header = () => {
    return (
        <header className="header">
            <div className="container-fluid">
                <div class="col">
                    <a href="#header-pic">
                        <img src={profile} alt="profile" class="img-size img-fluid float-right rounded-circle" style={{ width: "200px" }} />
                        <div>
                            <h1 class="name1" style={{ fontSize: "2rem" }}>David Warner</h1>
                            <h2 class="description">Fullstack Web Developer</h2>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header; 
import React from 'react';
import WoW from './WoW.png';
import mvc from './mvc.png';

const Projects = () => {
    return (
        <div class="card-group" >
            <div class="card">
                <img src={mvc} class="card-img-top" id="img-height" alt="password gen"></img>
                <div class="card-body">
                    <h5 class="card-title"><a href="https://github.com/1dhwarner/Tech_Blog_MVC_Example">Tech Blog MVC API</a></h5>
                    <p class="card-text"><a href="https://tech-blog-mvc-david-warner.herokuapp.com/">Live Deployment</a></p>
                </div>
            </div>
            <div class="card">
                <img src={WoW} class="card-img-top" id="image-height" alt="calorie"></img>
                <div class="card-body">
                    <h5 class="card-title"><a href="https://github.com/EmeraldAGreen/WoW">World of Workouts</a></h5>
                    <p class="card-text"><a href="https://world-of-workouts.herokuapp.com/">Live Deployment</a></p>
                </div>
            </div>
        </div>


    );
};

export default Projects; 
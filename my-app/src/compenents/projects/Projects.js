import React from 'react';
import WoW from './WoW.png';
import mvc from './mvc.png';
import jate from './jate.png';
import tpg from './tpg.png';
import readme from './readme.png';
import notes from './notes.png';


const Projects = () => {
    return (
        <div class="card-group">
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
            <div class="card">
                <img src={readme} class="card-img-top" id="image-height" alt="calorie"></img>
                <div class="card-body">
                    <h5 class="card-title"><a href="https://github.com/1dhwarner/README_App">README Generator</a></h5>
                    <p class="card-text"><a href="https://drive.google.com/file/d/1QDxX-N5rfjcZ0masOLPX_PLCularCzhW/view">Video Demo</a></p>
                </div>
            </div>
            <div class="card">
                <img src={tpg} class="card-img-top" id="image-height" alt="calorie"></img>
                <div class="card-body">
                    <h5 class="card-title"><a href="https://github.com/1dhwarner/DW_Team_Profile_Generator">Team Profile Generator</a></h5>
                    <p class="card-text"><a href="https://drive.google.com/file/d/1B4H7LcY7URow7SuEMpMKzazfSocThjgN/view">Video Demo</a></p>
                </div>
            </div>
            <div class="card">
                <img src={jate} class="card-img-top" id="image-height" alt="calorie"></img>
                <div class="card-body">
                    <h5 class="card-title"><a href="https://github.com/1dhwarner/PWA-Text-Editor-app">PWA Text Editor</a></h5>
                    <p class="card-text"><a href="https://salty-wave-12095.herokuapp.com/">Live Deployment</a></p>
                </div>
            </div>
            <div class="card">
                <img src={notes} class="card-img-top" id="image-height" alt="calorie"></img>
                <div class="card-body">
                    <h5 class="card-title"><a href="https://github.com/1dhwarner/Note_Taker_Express">In-Browser Notes app</a></h5>
                    <p class="card-text"><a href="https://note-taker-dw.herokuapp.com/">Live Deployment</a></p>
                </div>
            </div>
        </div>


    );
};

export default Projects; 
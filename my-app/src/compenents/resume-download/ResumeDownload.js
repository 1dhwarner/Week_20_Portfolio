import React from 'react';
import resume from './resume.pdf';

const ResumeDownload = () => {
    return (
        <div class="text-center" id="resume" style={{ marginTop: "50px" }}>
            <a href={resume} download>
                Download Resume
            </a>
        </div>
    );
};

export default ResumeDownload;
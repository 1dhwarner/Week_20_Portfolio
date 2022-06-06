import React from 'react';

const ContactMe = () => {
    return (
        <form id="contact-me">
            <div className="form-group">
                <label for="exampleInputName1">Name</label>
                <input type="name" className="form-control" id="exampleInputEmail1" ariaDescribedby="emailHelp" placeholder="Enter name" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" ariaDescribedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">How can I help?</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>
    );

};

export default ContactMe;
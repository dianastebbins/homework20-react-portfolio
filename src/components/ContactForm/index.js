import React from "react";

import "./style.css";

export default function ContactForm(props) {
    return (
        <div className="ContactForm">
            <form>
                <h1>Contact</h1>
                <hr className="purple" />
                <div className="form-group">
                    <label htmlFor="contactName">Name</label>
                    <input type="text" className="form-control" id="contactName" placeholder="John Smith" />
                </div>
                <div className="form-group">
                    <label htmlFor="emailAddress">Email</label>
                    <input type="email" className="form-control" id="emailAddress" placeholder="name@example.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary customBtn" onChange={props.handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}
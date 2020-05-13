import React from 'react'

import "./style.css"
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
    const handleFormSubmit = event => {
        event.preventDefault();
        // do something smart here...
    }

    return (
        <div className="ContactPage">
            <div className="row" id="contactPageContent">
                <div className="col-sm-1" id="column-one"></div>
                <div className="col-sm-10" id="column-two">
                    <section className="contentSection">
                        <ContactForm handleFormSubmit={handleFormSubmit} />
                    </section>
                </div>
                <div className="col-sm-1" id="column-three"></div>
            </div>
        </div>
    )
}
import React, { useState } from 'react'

import "./style.css"
import ContentBlock from "../../components/ContentBlock";
import ListCard from "../../components/ListCard";

export default function AboutPage() {
    // not really the correct use of state as these don't really change, but I wanted the practice
    const [aboutMeContentState, setAboutMeContentState] = useState([
        {
            id: 0,
            content: "Hello! My name is Diana Stebbins. I am a former UW CSE grad (go Dawgs!), married, a mom and now a Full Stack Web Development Bootcamp student excited to re-enter software development with an updated skill set."
        },
        {
            id: 1,
            content: "I have 18 years experience as a software developer working on a variety of projects and platforms. My first development experiences were programming handheld scanners in C, VB.net, C# and java. I then spent many years adding functionality to a complex order management system web application written primarily in java and javascript and supported by a number of proprietary libraries (database orm, communication, user authorization)."
        },
        {
            id: 2,
            content: "While part of that project team, I also proposed and designed some new features. One ended up being extremely popular with customer users, and another greatly reduced setup time of new accounts while adding visibility of those setups to teams outside of development who needed it."
        },
        {
            id: 3,
            content: "With the aging of that application into maintenance and support mode, I wanted to take on development challenges utilizing newer technologies. I enrolled in the Full Stack Web Development Bootcamp offered at UW Extension. I have added many newer technologies to my skillset and am eager to apply them beyond class projects. You can check out examples of my class project by visiting my Portfolio page."
        }
    ]);

    const [technicalSkillsState, setTechnicalSkillsState] = useState({
        header: "Technical Skills",
        list: [
            {
                id: 0,
                content: "HTML, React, Handlebars"
            },
            {
                id: 1,
                content: "CSS, Bootstrap"
            },
            {
                id: 2,
                content: "JavaScript, jQuery"
            },
            {
                id: 3,
                content: "API calls, AJAX, JSON"
            },
            {
                id: 4,
                content: "Node.js, express server"
            },
            {
                id: 5,
                content: "MySQL, Sequelize, MongoDB"
            },
            {
                id: 6,
                content: "MVC, OOP"
            },
            {
                id: 7,
                content: "Java, C#, VB.net, C++, C"
            }
        ]
    });

    const [professionalSkillsState, setProfessionalSkillsState] = useState({
        header: "Professional Skills",
        list: [
            {
                id: 0,
                content: "Strong attention to detail"
            },
            {
                id: 1,
                content: "Proven evaluation and analysis abilities"
            },
            {
                id: 2,
                content: "Exemplary time and project management skills"
            },
            {
                id: 3,
                content: "Excellent written and verbal communication skills"
            },
            {
                id: 4,
                content: "Proven trouble-shooting and bug resolution abilities"
            },
            {
                id: 5,
                content: "Excellent critical thinking and problem-solving skills"
            },
            {
                id: 6,
                content: "Experienced working as part of a team toward a singular goal"
            }
        ]
    });

    return (
        <div className="AboutPage">
            <div className="row">
                <div className="col-sm-1" id="column-one"></div>
                <div className="col-sm-10" id="column-two">
                    <section className="contentSection">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Meet Diana</h1>
                                <hr className="purple" />
                                <img className="wrapTextUnder" id="profilePic" src="assets/ProfilePic.jpg" alt="Diana Stebbins profile" />
                                <ContentBlock paragraphs={aboutMeContentState} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <ListCard data={technicalSkillsState} />
                            </div>
                            <div className="col-sm-7">
                                <ListCard data={professionalSkillsState} />
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-sm-1" id="column-three"></div>
            </div>
        </div>
    )
}
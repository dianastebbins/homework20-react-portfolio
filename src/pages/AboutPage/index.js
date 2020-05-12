import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"

import ContentBlock from '../../components/ContentBlock';

export default function AboutPage() {
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
            content: "With the aging of the application into more of a maintenance mode however, I wanted to take on bigger development challenges. Recognizing that my skills were dated, I enrolled in the Full Stack Web Development Bootcamp offered at UW Extension. I have learned many new technologies and have been able to immediately apply them to several projects. You can check out some of my projects by visiting the Portfolio page."
        }
    ])

    // useEffect(()=>{
    //     API.getAllPlayers().then(res=>{
    //         console.log(res.data)
    //         setPlayersState(res.data)
    //         setFilteredPlayersState(res.data)
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // },[])

    // const params = useParams(); // for retrieving id from .../path/:id apis
    // const history = useHistory();

    // const handleDeleteBtnClick = event=>{
    //     event.preventDefault();
    //     API.deletePlayerById(params.id).then(res=>{
    //         history.push('/')
    //     })
    // }

    // const handleFormSubmit = event=>{
    // OR
    // const handleInputChange = event=>{
    //     event.preventDefault();
    //     API.createPlayer(playerState).then(newPlayer=>{
    //         console.log(newPlayer)
    //         setPlayerState({
    //             name:'',
    //             team:''
    //         })
    //         history.push("/")
    //     })
    // }

    return (
        <div className="AboutPage">
            <div className="container">
                <div className="row">
                    <div className="col-sm-1" id="column-one"></div>
                    <div className="col-sm-10" id="column-two">
                        {/* <!-- this will center it, to make it less than that, use @media--> */}
                        {/* <!-- content section --> */}
                        <section className="contentSection">
                            <div className="row">
                                <div className="col-sm-12">

                                    <h1>Meet Diana</h1>
                                    <hr className="purple" />
                                    <img className="wrapTextUnder" id="profilePic" src="assets/ProfilePic.jpg" alt="Diana Stebbins profile picture" />
                                    <ContentBlock paragraphs={aboutMeContentState}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-5">
                                    <div className="card">
                                        <div className="card-header">
                                            Technical Skills
                                </div>
                                        <div className="card-body">
                                            <ul>
                                                <li>HTML, Handlebars</li>
                                                <li>CSS, Bootstrap</li>
                                                <li>JavaScript, jQuery</li>
                                                <li>API calls, AJAX, JSON</li>
                                                <li>Node.js, express server</li>
                                                <li>MySQL, Sequelize, MongoDB</li>
                                                <li>MVC, OOP</li>
                                                <li>Java, C#, VB.net, C++, C</li>
                                            </ul>
                                        </div>
                                        <div className="card-footer">
                                            <large className="text-muted"></large>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <div className="card">
                                        <div className="card-header">
                                            Professional Skills
                                </div>
                                        <div className="card-body">
                                            <ul>
                                                <li>Strong attention to detail</li>
                                                <li>Proven evaluation and analysis abilities</li>
                                                <li>Critical thinking and problem-solving skills</li>
                                                <li>Exemplary time and project management skills</li>
                                                <li>Excellent written and verbal communication skills</li>
                                                <li>Proven trouble-shooting and bug resolution abilities</li>
                                                <li>Experienced working as part of a team toward a singular goal</li>
                                            </ul>
                                        </div>
                                        <div className="card-footer">
                                            <large className="text-muted"></large>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-sm-1" id="column-three"></div>
                </div>
            </div>

        </div>
    )
}
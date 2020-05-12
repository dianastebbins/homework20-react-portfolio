import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"

import ProjectCard from '../../components/ProjectCard';

export default function PortfolioPage() {
    // const portfolioDetails = [
    //     {name:"Weather Dashboard"},
    //     {name:"Frustration."}
    // ]
    const [portfolioDetailsState, setPortfolioDetailsState] = useState([
        {
            header: "Weather Dashboard",
            title: "",
            text: "",
            imageName: "",
            imageAlt: "",
            appGithub: "",
            appUrl: "",
            footer: ""
        }
    ])

    // useEffect(()=>{
    //     // API.getPortfolioProjectInfo().then(res=>{
    //     //     console.log(res.data)
    //     //     setPortfolioState(res.data)
    //     // }).catch(err=>{
    //     //     console.log(err);
    //     // })
    //     console.log("HERE 1");
    //     const portList = API.getPortfolioProjectInfo();
    //     console.log("portList: " + portList)
    //     setPortfolioState(API.getPortfolioProjectInfo());
    //     console.log("HERE 2");

    //     console.log(portfolioState)
    //     console.log("HERE 3");

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
        <div className="PortfolioPage">
            <h1>PortfolioPage</h1>

            {portfolioDetailsState[0].name}
            <ProjectCard data={portfolioDetailsState[0]} />
            <h3>Content goes here</h3>
            <Link to="/contact" >temporary link to ContactPage</Link>
        </div>
    )
}
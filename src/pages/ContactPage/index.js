import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"

import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
    // const [playerState,setPlayerState]= useState({
    //     name:'',
    //     team:''
    // })

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

    const handleFormSubmit = event => {
        event.preventDefault();
        alert("Sorry, email is not actually implemented yet!");
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
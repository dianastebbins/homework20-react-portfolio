import React from "react";

import "./style.css";

export default function ProjectCard(props) {
    return (
        <div className="ProjectCard card" key={props.data.id}>
            <div className="card-header"> {props.data.header} </div>
            <div className="card-body">
                <h5 className="card-title"> {props.data.title} </h5>
                <p className="card-text"> {props.data.text} </p>
            </div>
            <img className="card-img-top" src={props.data.imageName} alt={props.data.imageAlt} />
            <p className="card-repo">
                <a className="card-repo-link" target="_blank" rel="noopener noreferrer" 
                    href={props.data.appGithub}>GitHub repo link</a>
            </p>
            <a target="_blank" rel="noopener noreferrer" href={props.data.appUrl}>
                <div className="card-footer"><span className="text-muted"> {props.data.footer} </span></div>
            </a>
        </div>
    )
}
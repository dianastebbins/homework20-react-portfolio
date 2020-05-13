import React, { useState } from 'react'

import "./style.css"
import ProjectCard from '../../components/ProjectCard';

export default function PortfolioPage() {
    // maybe someday this lives in a database table and it's just an API call here...
    const [portfolioDetailsState, setPortfolioDetailsState] = useState([
        {
            id: 0,
            header: "Project (Group)",
            title: "Frustration.",
            text: "We need more Frustration. in our lives",
            imageName: "assets/frustration.PNG",
            imageAlt: "Frustration. app screenshot",
            appGithub: "https://github.com/dianastebbins/projectOne-Frustration",
            appUrl: "https://dianastebbins.github.io/projectOne-Frustration/",
            footer: "Play here!"
        }, {
            id: 1,
            header: "Project (Group)",
            title: "Camp Registration",
            text: "Get outside!",
            imageName: "assets/registration.PNG",
            imageAlt: "Camp Registration app screenshot",
            appGithub: "https://github.com/coleloui/MapleValley",
            appUrl: "https://protected-lowlands-08660.herokuapp.com/",
            footer: "Sign up!"
        }, {
            id: 2,
            header: "Project (Group)",
            title: "Mark-it",
            text: "Under Construction!",
            imageName: "assets/ComingSoon.PNG",
            imageAlt: "Coming soon!",
            appGithub: "",
            appUrl: "",
            footer: "Soon!"
        }, {
            id: 3,
            header: "Widget",
            title: "Weather Dashboard",
            text: "What's the weather?",
            imageName: "assets/weatherDashboard.PNG",
            imageAlt: "Weather app screenshot",
            appGithub: "https://github.com/dianastebbins/homework6-weatherDashboard",
            appUrl: "https://dianastebbins.github.io/homework6-weatherDashboard/",
            footer: "Check here!"
        }, {
            id: 4,
            header: "Widget",
            title: "Eat Da Burgers!",
            text: "Nom nom nom",
            imageName: "assets/burger.PNG",
            imageAlt: "Burgers app screenshot",
            appGithub: "https://github.com/dianastebbins/hw12-burgerLogger",
            appUrl: "https://sheltered-citadel-58173.herokuapp.com/",
            footer: "Get snacking!"
        }, {
            id: 5,
            header: "Widget",
            title: "Mini Day Planner",
            text: "You can't be too prepared",
            imageName: "assets/dayPlanner.PNG",
            imageAlt: "Day Planner app screenshot",
            appGithub: "https://github.com/dianastebbins/homework5-dayPlanner",
            appUrl: "https://dianastebbins.github.io/homework5-dayPlanner/",
            footer: "Get organized!"
        }, {
            id: 6,
            header: "Widget",
            title: "Team Page Generator",
            text: "Meet the Team",
            imageName: "assets/teamPageGenerator.PNG",
            imageAlt: "Team Page app screenshot",
            appGithub: "https://github.com/dianastebbins/hw9-teamPageGenerator",
            appUrl: "https://github.com/dianastebbins/hw9-teamPageGenerator/blob/master/README.md",
            footer: "Learn More!"
        }, {
            id: 7,
            header: "Widget",
            title: "Password Generator",
            text: "Customize requirements",
            imageName: "assets/pwGenerator.PNG",
            imageAlt: "Password app screenshot",
            appGithub: "https://github.com/dianastebbins/homework3-passwordGenerator",
            appUrl: "https://dianastebbins.github.io/homework3-passwordGenerator/",
            footer: "Protect me!"
        }
    ])

    // because of rows/columns, need to create a dynamic Grid Component that would 
    // take an array of ProjectCards along with column size parameters. But that hurts
    // my head right now, so
    // just indexing the array to make the ProjectCard Component calls
    return (
        <div className="PortfolioPage">
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <section className="contentSection">
                        <h1>Portfolio</h1>
                        <hr className="purple" />
                        <div className="row">
                            <div className="col-sm-4"><ProjectCard data={portfolioDetailsState[0]} /></div>
                            <div className="col-sm-4"><ProjectCard data={portfolioDetailsState[1]} /></div>
                            <div className="col-sm-4"><ProjectCard data={portfolioDetailsState[2]} /></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-4"><ProjectCard data={portfolioDetailsState[3]} /></div>
                            <div className="col-sm-4"><ProjectCard data={portfolioDetailsState[4]} /></div>
                            <div className="col-sm-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4"><ProjectCard data={portfolioDetailsState[5]} /></div>
                            <div className="col-sm-4"><ProjectCard data={portfolioDetailsState[6]} /></div>
                            <div className="col-sm-4"><ProjectCard data={portfolioDetailsState[7]} /></div>
                        </div>
                    </section>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </div>
    )
}
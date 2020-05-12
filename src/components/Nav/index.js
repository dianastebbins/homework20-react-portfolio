import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Nav(props) {
    return (
        <nav className="Nav navbar navbar-expand-sm d-flex justify-content-center">
            <span className="navbar-brand" href="#">Diana Layne Stebbins</span>
            <nav className="nav">
                <Link to="/" className="nav-item nav-link">About</Link>
                <Link to="/portfolio" className="nav-item nav-link">Portfolio</Link>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </nav>
        </nav>
    )
}

